import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import type { FAQ } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";

export function FaqSection({
  faqs,
  eyebrow = "Questions",
  title = "The things clients ask us first",
  lead,
  contactHref = "/contact",
  className,
}: {
  faqs: FAQ[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  contactHref?: string;
  className?: string;
}) {
  return (
    <section className={className ?? "section-y bg-background"}>
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

              <div className="mt-9 rounded-[var(--radius-card)] border border-line bg-surface p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <MessageCircleQuestion
                    className="size-5.5"
                    strokeWidth={1.9}
                    aria-hidden
                  />
                </span>
                <p className="mt-5 font-heading text-[1.0625rem] font-bold text-heading">
                  Still not answered?
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                  Send us the specifics and a named engineer will come back to you
                  within two working days.
                </p>
                <Button asChild variant="primary" size="md" className="mt-5">
                  <Link href={contactHref}>Ask us directly</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <Accordion type="single" collapsible defaultValue="faq-0">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
