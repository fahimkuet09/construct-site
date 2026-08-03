"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { FieldError } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z
    .string()
    .min(1, "Enter your email address")
    .email("Enter a valid email address"),
});

type Values = z.infer<typeof schema>;

export function NewsletterForm() {
  const [done, setDone] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (_values: Values) => {
    // Demo build — no endpoint is wired up. Simulate the round trip so the
    // success and pending states can be reviewed.
    await new Promise((r) => setTimeout(r, 700));
    setDone(true);
    reset();
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-[var(--radius-btn)] border border-success/30 bg-success/10 px-5 py-4">
        <CheckCircle2 className="size-5 shrink-0 text-success" aria-hidden />
        <p className="text-[0.9375rem] font-medium text-white">
          You&apos;re subscribed. Look out for the next quarterly briefing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="you@organisation.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "newsletter-error" : undefined}
            className={cn(
              "h-13 w-full rounded-[var(--radius-btn)] border bg-white/8 px-4 text-[0.9375rem] text-white",
              "placeholder:text-white/40 transition-colors",
              "focus:border-accent focus:bg-white/12 focus:outline-none",
              errors.email ? "border-danger" : "border-white/18",
            )}
            {...register("email")}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "flex h-13 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-btn)] px-6",
            "bg-accent font-heading text-[0.9375rem] font-bold text-primary-950",
            "transition-all duration-300 hover:bg-white disabled:opacity-60",
          )}
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <>
              Subscribe
              <ArrowRight className="size-4" aria-hidden />
            </>
          )}
        </button>
      </div>
      {errors.email ? (
        <div id="newsletter-error" className="mt-2">
          <FieldError>{errors.email.message}</FieldError>
        </div>
      ) : null}
    </form>
  );
}
