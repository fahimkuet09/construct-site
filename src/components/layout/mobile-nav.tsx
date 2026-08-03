"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav({ invert = false }: { invert?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const pathname = usePathname();

  // Close the drawer whenever the route changes, including anchor jumps.
  // Adjusting state during render is React's documented alternative to an
  // effect here — it avoids rendering the open drawer for a frame first.
  const [lastPath, setLastPath] = React.useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className={cn(
            "flex size-11 cursor-pointer items-center justify-center rounded-full transition-colors lg:hidden",
            invert
              ? "text-white hover:bg-white/12"
              : "text-heading hover:bg-primary-50",
          )}
        >
          <Menu className="size-6" strokeWidth={2.2} />
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-100 bg-primary-950/60 backdrop-blur-sm lg:hidden"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                data-lenis-prevent
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-y-0 right-0 z-101 flex w-[min(92vw,25rem)] flex-col bg-surface shadow-[var(--shadow-deep)] lg:hidden"
              >
                <Dialog.Title className="sr-only">Navigation</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Site sections and contact details
                </Dialog.Description>

                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <span className="font-heading text-[0.6875rem] font-bold tracking-[0.2em] text-muted uppercase">
                    Menu
                  </span>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close navigation menu"
                      className="flex size-11 cursor-pointer items-center justify-center rounded-full text-heading transition-colors hover:bg-primary-50"
                    >
                      <X className="size-5.5" strokeWidth={2.2} />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="flex-1 overflow-y-auto px-5 py-4">
                  <ul className="flex flex-col">
                    {navigation.map((item) => {
                      const hasChildren = Boolean(item.columns?.length);
                      const isOpen = expanded === item.label;

                      return (
                        <li key={item.label} className="border-b border-line">
                          <div className="flex items-center">
                            <Link
                              href={item.href}
                              className="flex-1 py-4 font-heading text-[1.125rem] font-bold text-heading transition-colors hover:text-primary"
                            >
                              {item.label}
                            </Link>
                            {hasChildren ? (
                              <button
                                type="button"
                                onClick={() =>
                                  setExpanded(isOpen ? null : item.label)
                                }
                                aria-expanded={isOpen}
                                aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                                className="flex size-11 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-primary-50 hover:text-primary"
                              >
                                <motion.span
                                  animate={{ rotate: isOpen ? 45 : 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="text-[1.4rem] leading-none"
                                  aria-hidden
                                >
                                  +
                                </motion.span>
                              </button>
                            ) : null}
                          </div>

                          <AnimatePresence initial={false}>
                            {hasChildren && isOpen ? (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <ul className="flex flex-col gap-0.5 pb-4 pl-1">
                                  {item.columns?.flatMap((col) =>
                                    col.links.map((link) => (
                                      <li key={link.href + link.label}>
                                        <Link
                                          href={link.href}
                                          className="block rounded-lg px-3 py-2.5 text-[0.9375rem] text-body transition-colors hover:bg-primary-50 hover:text-primary"
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    )),
                                  )}
                                </ul>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="border-t border-line bg-background px-5 py-5">
                  <Button asChild variant="primary" size="lg" className="w-full">
                    <Link href="/contact">
                      Start a project
                      <ArrowUpRight className="size-4.5" aria-hidden />
                    </Link>
                  </Button>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="mt-3 flex items-center justify-center gap-2 py-2 text-[0.875rem] font-semibold text-body transition-colors hover:text-primary"
                  >
                    <Phone className="size-4" aria-hidden />
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
