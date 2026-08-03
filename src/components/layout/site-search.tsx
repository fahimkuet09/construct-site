"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CornerDownLeft, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { searchSite, type SearchDoc } from "@/lib/search";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/locale-provider";

const SUGGESTIONS = [
  "Tunnelling",
  "Bridges",
  "Meghna Estuary",
  "Graduate programme",
  "Offshore wind",
];

export function SiteSearch({ invert = false }: { invert?: boolean }) {
  const router = useRouter();
  const { t } = useLocale();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);

  const results = React.useMemo<SearchDoc[]>(() => searchSite(query), [query]);

  // Reset the highlighted row when the query changes, during render rather
  // than in an effect so there is never a frame with a stale selection.
  const [lastQuery, setLastQuery] = React.useState(query);
  if (query !== lastQuery) {
    setLastQuery(query);
    setActive(0);
  }

  // ⌘K / Ctrl+K anywhere on the site.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = React.useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      router.push(href);
    },
    [router],
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[active];
      if (target) go(target.href);
    }
  };

  const grouped = React.useMemo(() => {
    const map = new Map<string, SearchDoc[]>();
    for (const doc of results) {
      const list = map.get(doc.group) ?? [];
      list.push(doc);
      map.set(doc.group, list);
    }
    return [...map.entries()];
  }, [results]);

  let runningIndex = -1;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={t("search.open")}
          className={cn(
            "flex size-11 cursor-pointer items-center justify-center rounded-full transition-colors",
            invert
              ? "text-white/80 hover:bg-white/12 hover:text-white"
              : "text-body hover:bg-primary-50 hover:text-primary",
          )}
        >
          <Search className="size-[1.15rem]" strokeWidth={2.2} />
        </button>
      </DialogTrigger>

      <DialogContent
        hideClose
        className="top-[12vh] max-w-2xl translate-y-0 p-0 md:p-0"
      >
        <DialogTitle className="sr-only">{t("search.title")}</DialogTitle>
        <DialogDescription className="sr-only">
          {t("search.description")}
        </DialogDescription>

        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <Search className="size-5 shrink-0 text-muted" aria-hidden />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t("search.placeholder")}
            aria-label={t("search.label")}
            className="w-full bg-transparent text-[1.0625rem] text-heading outline-none placeholder:text-muted/70"
          />
          <kbd className="hidden shrink-0 rounded-md border border-line px-2 py-1 font-heading text-[0.6875rem] font-bold text-muted sm:block">
            ESC
          </kbd>
        </div>

        <div className="max-h-[54vh] overflow-y-auto p-3" data-lenis-prevent>
          {query.trim().length < 2 ? (
            <div className="px-3 py-5">
              <p className="mb-3 font-heading text-[0.75rem] font-bold tracking-[0.14em] text-muted uppercase">
                {t("search.suggestions")}
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQuery(s)}
                    className="cursor-pointer rounded-full border border-line px-3.5 py-1.5 text-[0.8125rem] font-medium text-body transition-colors hover:border-primary hover:bg-primary-50 hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="px-3 py-12 text-center">
              <p className="font-heading text-[1rem] font-bold text-heading">
                {t("search.noResults")} “{query}”
              </p>
              <p className="mt-1.5 text-[0.875rem] text-muted">
                Try a sector, a country, or a project name.
              </p>
            </div>
          ) : (
            grouped.map(([group, docs]) => (
              <div key={group} className="mb-2">
                <p className="px-3 py-2 font-heading text-[0.6875rem] font-bold tracking-[0.14em] text-muted uppercase">
                  {group}
                </p>
                <ul>
                  {docs.map((doc) => {
                    runningIndex += 1;
                    const isActive = runningIndex === active;
                    return (
                      <li key={doc.id}>
                        <Link
                          href={doc.href}
                          onClick={() => {
                            setOpen(false);
                            setQuery("");
                          }}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-3 py-3 transition-colors",
                            isActive ? "bg-primary-50" : "hover:bg-background",
                          )}
                        >
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-heading text-[0.9375rem] font-bold text-heading">
                              {doc.title}
                            </span>
                            <span className="block truncate text-[0.8125rem] text-muted">
                              {doc.description}
                            </span>
                          </span>
                          {isActive ? (
                            <CornerDownLeft
                              className="size-4 shrink-0 text-primary"
                              aria-hidden
                            />
                          ) : (
                            <ArrowRight
                              className="size-4 shrink-0 text-muted/50"
                              aria-hidden
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
