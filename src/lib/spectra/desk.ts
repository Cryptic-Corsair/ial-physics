"use client";

import { useSyncExternalStore } from "react";

/* ═══════════════════════════════════════════════════════════════
   IAL PHYSICS · the desk
   The desk is the home surface; the store remembers how far a
   visitor got so the desk can pick up where they left off. The
   engagement flag records entry into the desk or the opening of a
   unit or topic; lastUnit/lastTopic/lastAt drive the continue card.
   seenLanding (a relic of the retired first-visit introduction)
   stays in the schema so old saved states keep parsing — new
   writes always set it alongside engagement.

   No account, no sign-in: these markers live in localStorage,
   alongside the revised marks and the reading clock.

   localStorage · key "reaction-club-desk-v1"
   { seenLanding: boolean       — kept for saved-state compatibility
     engaged: boolean           — has entered the desk or opened a unit/topic
     lastUnit: string | null    — last unit code tapped
     lastTopic: string | null   — last topic id tapped
     lastAt: number | null }    — when that happened (epoch ms)
   ═══════════════════════════════════════════════════════════════ */

const KEY = "reaction-club-desk-v1";

export interface DeskState {
  engaged: boolean;
  seenLanding: boolean;
  lastUnit: string | null;
  lastTopic: string | null;
  lastAt: number | null;
}

const EMPTY: DeskState = {
  engaged: false,
  seenLanding: false,
  lastUnit: null,
  lastTopic: null,
  lastAt: null,
};

let state: DeskState = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function load() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === "object") {
      state = {
        engaged: parsed.engaged === true,
        /* Old saves with an engaged member have already passed the landing. */
        seenLanding: parsed.seenLanding === true || parsed.engaged === true,
        lastUnit:
          typeof parsed.lastUnit === "string" ? parsed.lastUnit : null,
        lastTopic:
          typeof parsed.lastTopic === "string" ? parsed.lastTopic : null,
        lastAt: typeof parsed.lastAt === "number" ? parsed.lastAt : null,
      };
    }
  } catch {
    /* private mode / corrupt data — first visit it is */
  }
}

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — memory only for this tab */
  }
}

function emit() {
  for (const l of listeners) l();
}

function set(next: DeskState) {
  state = next;
  persist();
  emit();
}

/** The visitor has chosen to enter the study workspace. */
export function markDeskEntered() {
  load();
  set({ ...state, engaged: true, seenLanding: true });
}

/** the member moment: a unit page was opened */
export function markUnit(code: string) {
  load();
  set({ ...state, engaged: true, seenLanding: true, lastUnit: code, lastTopic: null, lastAt: Date.now() });
}

/** a topic (or its note) was opened — the strongest "continue here" signal */
export function markTopic(code: string, topicId: string) {
  load();
  set({ ...state, engaged: true, seenLanding: true, lastUnit: code, lastTopic: topicId, lastAt: Date.now() });
}

function subscribe(cb: () => void) {
  load();
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY && e.key !== null) return;
    state = EMPTY;
    hydrated = false;
    load();
    emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): DeskState {
  load();
  return state;
}

function getServerSnapshot(): DeskState {
  return EMPTY;
}

export function useDesk(): DeskState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
