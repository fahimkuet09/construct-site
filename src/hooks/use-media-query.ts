"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * SSR-safe media query built on `useSyncExternalStore`, which is the correct
 * primitive for subscribing to something outside React. It also avoids the
 * setState-in-effect cascade that a useState/useEffect version causes.
 *
 * The server snapshot is always `false`, so the markup React renders on the
 * server matches the first client render and no hydration mismatch occurs.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Matches the Tailwind `lg` breakpoint. */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 64rem)");
}

/** True only on devices with a real hovering pointer (mouse/trackpad). */
export function useHasFinePointer() {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}
