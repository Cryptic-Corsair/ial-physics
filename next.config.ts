import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Retired front-door addresses fold onto the desk at /. The
     showcase landing lived at /portal before it was promoted to the
     homepage; now the showcase is retired and the workspace itself
     has moved to the root (the desk is the main page). Every old
     link — bookmarks, share links, the alternate doors' exit buttons,
     anything external — redirects to its room's new root-form address
     (query strings ride along untouched). Permanent, so crawlers
     fold the old addresses into the new ones. */
  async redirects() {
    return [
      { source: "/portal", destination: "/", permanent: true },
      { source: "/club", destination: "/", permanent: true },
      { source: "/club/:path*", destination: "/:path*", permanent: true },
    ];
  },
  /* Expose the exact source revision used by Vercel (or CI) so the
     footer can identify the deployed build. Local builds say "local". */
  env: {
    NEXT_PUBLIC_BUILD_VERSION:
      process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GITHUB_SHA ?? "local",
  },
  /* The sandbox deploy pipeline (.zscripts/build.sh, untracked) packages
     .next/standalone into its container image. Vercel ignores this key and
     builds the app its own way, so it is safe to leave in for both. */
  output: "standalone",

  /* The source is expected to type-check clean — the build fails loudly
     on errors instead of shipping them. */
  typescript: {
    ignoreBuildErrors: false,
  },

  /* No X-Powered-By header. */
  poweredByHeader: false,

  /* The workspace preview proxies the site through *.space-z.ai hosts.
     Next's dev server warns (and in future versions will refuse) cross-
     origin /_next/* asset requests from hosts it doesn't know, so the
     preview family is whitelisted here. Dev-only; production is unaffected. */
  allowedDevOrigins: ["*.space-z.ai"],

  reactStrictMode: false,
};

export default nextConfig;
