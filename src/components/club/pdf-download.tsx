"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { Download, Key, Lock, X } from "./icons";
import { readableInk, shade } from "./bits";

/* ═══════════════════════════════════════════════════════════════
   IAL PHYSICS · the PDF handout — download the note as a file.

   Every note reader carries this one control: it hands out the
   note's PDF (public/pdf/<docId>.pdf, lifted off the print room by
   scripts/gen-note-pdfs.mjs). The files sit behind a password, the
   owner's own gate — the right word opens the handout for the
   session, so a revision sitting doesn't retype it, and a fresh
   visit asks again. Nothing sensitive rides the file: the password
   is the owner's "members only" preference, not a lock on the
   material itself.

   The handout itself is generated, never fetched blind: if the
   file hasn't been built on this deployment the gate says so
   plainly instead of downloading an error page.
   ═══════════════════════════════════════════════════════════════ */

/* the owner's password — the one word the gate accepts */
const PDF_PASSWORD = "0077";
/* the session's unlock — one entry, every handout until the tab closes */
const UNLOCK_KEY = "rc-pdf-unlock";

const readUnlock = () => {
  try {
    return sessionStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
};
const writeUnlock = () => {
  try {
    sessionStorage.setItem(UNLOCK_KEY, "1");
  } catch {
    /* private mode — the gate just asks again next time */
  }
};

export function PdfDownloadButton({
  docId,
  fileName,
  title,
  className,
}: {
  docId: string;
  /** the file the browser saves, e.g. "IAL PHYSICS — WPH11 Topic 5 — …" */
  fileName: string;
  /** the note's own title, for the gate's copy */
  title: string;
  className?: string;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [fileError, setFileError] = useState(false);

  /* the session's word rides sessionStorage — read after mount so the
     server paint and the first client paint agree */
  useEffect(() => {
    setUnlocked(readUnlock());
  }, []);

  const startDownload = async () => {
    setBusy(true);
    setFileError(false);
    try {
      const res = await fetch(`/pdf/${docId}.pdf`);
      if (!res.ok) throw new Error("missing");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 8000);
      setGateOpen(false);
    } catch {
      setFileError(true);
    } finally {
      setBusy(false);
    }
  };

  const onClick = () => {
    if (busy) return;
    if (unlocked) {
      void startDownload();
    } else {
      setFileError(false);
      setGateOpen(true);
    }
  };

  return (
    <>
      <m.button
        type="button"
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Download ${title} as a PDF`}
        className={`inline-flex min-h-[calc(48px*var(--ui-scale))] cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-[calc(15.5px*var(--ts-body))] font-semibold select-none puff ${className ?? ""}`}
        style={{
          background: "var(--color-ink)",
          color: "var(--color-paper)",
          boxShadow: `0 3px 0 ${shade("var(--color-ink)")}`,
        }}
      >
        {unlocked ? (
          <Download className="h-4.5 w-4.5" strokeWidth={2.1} />
        ) : (
          <Lock className="h-4.5 w-4.5" strokeWidth={2.1} />
        )}
        Download PDF
      </m.button>

      {gateOpen && (
        <PdfGate
          title={title}
          busy={busy}
          fileError={fileError}
          onClose={() => setGateOpen(false)}
          onUnlock={() => {
            writeUnlock();
            setUnlocked(true);
            void startDownload();
          }}
        />
      )}
    </>
  );
}

/* ————— the gate —————
   One small panel, the house's own furniture: the key, the ask,
   the field, and the plain answers for the two ways it goes
   wrong — a wrong word, or a file that isn't there. */

function PdfGate({
  title,
  busy,
  fileError,
  onClose,
  onUnlock,
}: {
  title: string;
  busy: boolean;
  fileError: boolean;
  onClose: () => void;
  onUnlock: () => void;
}) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* the gate only ever mounts from a client click — the server paint
     never carries it, so the portal is always client-side */
  useEffect(() => {
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => window.clearTimeout(t);
  }, []);

  const submit = () => {
    if (busy) return;
    if (value === PDF_PASSWORD) {
      onUnlock();
    } else {
      setShake((s) => s + 1);
      setValue("");
      inputRef.current?.focus();
    }
  };

  const CORAL = "#FF6B6B";

  return createPortal(
        <AnimatePresence>
          <>
            <m.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={onClose}
              className="fixed inset-0 z-[85] bg-cocoa/35 backdrop-blur-[2px]"
            />
            <m.div
              key="panel"
              role="dialog"
              aria-label="Download the PDF"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 340, damping: 26 }}
              onKeyDown={(e) => {
                if (e.key === "Escape") onClose();
              }}
              className="fixed inset-x-3 top-[calc(1rem+var(--sa-top))] z-[86] mx-auto flex w-auto max-w-[calc(430px*var(--ui-scale))] flex-col rounded-[calc(28px*var(--ui-scale))] bg-paper outline-none sm:inset-x-auto sm:left-1/2 sm:w-[min(calc(430px*var(--ui-scale)),92vw)] sm:-translate-x-1/2"
              style={{
                boxShadow:
                  "0 4px 0 var(--edge), 0 30px 60px -24px rgb(0 0 0 / 0.45)",
              }}
            >
              {/* header */}
              <div className="flex items-center gap-3 px-5 pt-4">
                <span
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 font-display text-[calc(12px*var(--ts-other))] font-bold tracking-[0.08em] uppercase"
                  style={{
                    background: CORAL,
                    color: readableInk(CORAL),
                    boxShadow: `0 3px 0 ${shade(CORAL)}`,
                  }}
                >
                  <Key className="h-3.5 w-3.5" /> PDF handout
                </span>
                <p className="min-w-0 flex-1 truncate text-[calc(12.5px*var(--ts-other))] font-bold text-ink-faint">
                  {title}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-ink/[0.06] text-ink-soft transition-colors hover:bg-ink/[0.11] hover:text-ink"
                >
                  <X className="h-[calc(18px*var(--ui-scale))] w-[calc(18px*var(--ui-scale))]" strokeWidth={2.2} />
                </button>
              </div>

              <form
                className="px-5 pb-5 pt-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
              >
                <p className="text-[calc(13.5px*var(--ts-body))] leading-relaxed text-ink-soft">
                  The PDF files are password-protected. Enter the password to
                  download this note as a PDF.
                </p>

                <m.div
                  key={shake}
                  animate={shake ? { x: [0, -7, 7, -4, 4, 0] } : undefined}
                  transition={{ duration: 0.32 }}
                  className="mt-4"
                >
                  <input
                    ref={inputRef}
                    type="password"
                    inputMode="numeric"
                    autoComplete="off"
                    value={value}
                    disabled={busy}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Password"
                    aria-label="PDF password"
                    className="w-full rounded-[calc(14px*var(--ui-scale))] border-[1.5px] border-ink/15 bg-paper px-4 py-3 text-center text-[calc(16px*var(--ts-body))] tracking-[0.3em] text-ink outline-none placeholder:tracking-[0.1em] placeholder:text-ink-faint focus:border-ink/40"
                  />
                </m.div>

                {shake > 0 && value === "" && (
                  <p
                    className="mt-2 text-center text-[calc(12.5px*var(--ts-other))] font-bold"
                    style={{ color: CORAL }}
                  >
                    Wrong password. Try again.
                  </p>
                )}

                {fileError && (
                  <p className="mt-2 text-center text-[calc(12.5px*var(--ts-other))] leading-relaxed font-bold text-ink-soft">
                    This PDF has not been built on this deployment yet.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={busy || value.length === 0}
                  className="mt-4 inline-flex min-h-[calc(46px*var(--ui-scale))] w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-[calc(15px*var(--ts-body))] font-semibold text-paper select-none disabled:cursor-default disabled:opacity-45"
                  style={{
                    background: CORAL,
                    color: readableInk(CORAL),
                    boxShadow: `0 3px 0 ${shade(CORAL)}`,
                  }}
                >
                  {busy ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-[2.5px] border-current/25 border-t-current" />
                      Downloading…
                    </>
                  ) : (
                    <>
                      <Download className="h-4.5 w-4.5" strokeWidth={2.1} />
                      Download the PDF
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-[calc(11.5px*var(--ts-other))] text-ink-faint">
                  One password opens every note until the tab closes.
                </p>
              </form>
            </m.div>
          </>
        </AnimatePresence>,
        document.body,
  );
}
