"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send, Upload } from "lucide-react";
import {
  Checkbox,
  Field,
  FieldError,
  FieldHint,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/careers";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().min(1, "Enter your email address").email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a contact number"),
  role: z.string().min(1, "Choose the role you are applying for"),
  experience: z.string().min(1, "Select your experience level"),
  cv: z.string().min(1, "Attach your CV"),
  message: z
    .string()
    .min(20, "Tell us a little about yourself (20 characters minimum)")
    .max(2000, "Please keep this under 2,000 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you are happy for us to process your application" }),
  }),
});

type Values = z.infer<typeof schema>;

const EXPERIENCE = [
  "Graduate / under 2 years",
  "2–5 years",
  "5–10 years",
  "10+ years",
];

export function ApplicationForm() {
  const [sent, setSent] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { role: "", experience: "", cv: "" },
  });

  const consent = watch("consent");

  const onSubmit = async (_values: Values) => {
    // Demo build — nothing is uploaded or transmitted.
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setFileName("");
    reset();
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-5 rounded-[var(--radius-card)] border border-success/30 bg-success/8 p-8 lg:p-10">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-success/15 text-success">
          <CheckCircle2 className="size-7" strokeWidth={1.9} aria-hidden />
        </span>
        <div>
          <h3 className="text-[1.5rem] font-bold text-heading">
            Application received
          </h3>
          <p className="mt-2.5 max-w-[52ch] text-body">
            Every application is read by a person, not an algorithm. You will hear
            back from us within five working days either way.
          </p>
        </div>
        <Button variant="outline" size="md" onClick={() => setSent(false)}>
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <Label htmlFor="fullName" required>
            Full name
          </Label>
          <Input
            id="fullName"
            autoComplete="name"
            invalid={Boolean(errors.fullName)}
            {...register("fullName")}
          />
          <FieldError>{errors.fullName?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="app-email" required>
            Email
          </Label>
          <Input
            id="app-email"
            type="email"
            autoComplete="email"
            invalid={Boolean(errors.email)}
            {...register("email")}
          />
          <FieldError>{errors.email?.message}</FieldError>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <Label htmlFor="app-phone" required>
            Phone
          </Label>
          <Input
            id="app-phone"
            type="tel"
            autoComplete="tel"
            invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          <FieldError>{errors.phone?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="experience" required>
            Experience
          </Label>
          <Select
            id="experience"
            invalid={Boolean(errors.experience)}
            {...register("experience")}
          >
            <option value="">Select…</option>
            {EXPERIENCE.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Select>
          <FieldError>{errors.experience?.message}</FieldError>
        </Field>
      </div>

      <Field>
        <Label htmlFor="role" required>
          Role you are applying for
        </Label>
        <Select id="role" invalid={Boolean(errors.role)} {...register("role")}>
          <option value="">Select a position…</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.title}>
              {job.title} — {job.location}
            </option>
          ))}
          <option value="Speculative application">
            Speculative — no specific role
          </option>
        </Select>
        <FieldError>{errors.role?.message}</FieldError>
      </Field>

      {/* ------------------------------------------------ CV upload */}
      <Field>
        <Label htmlFor="cv" required>
          CV
        </Label>
        <label
          htmlFor="cv"
          className={cn(
            "flex cursor-pointer items-center gap-4 rounded-[14px] border border-dashed bg-surface px-5 py-5 transition-colors",
            errors.cv ? "border-danger" : "border-line hover:border-primary",
          )}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
            <Upload className="size-5" strokeWidth={1.9} aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-[0.9375rem] font-bold text-heading">
              {fileName || "Choose a file"}
            </span>
            <span className="block text-[0.8125rem] text-muted">
              PDF, DOC or DOCX — up to 10 MB
            </span>
          </span>
        </label>
        <input
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => {
            const name = e.target.files?.[0]?.name ?? "";
            setFileName(name);
            setValue("cv", name, { shouldValidate: true });
          }}
        />
        <FieldError>{errors.cv?.message}</FieldError>
      </Field>

      <Field>
        <Label htmlFor="app-message" required>
          Why work with us?
        </Label>
        <Textarea
          id="app-message"
          rows={5}
          placeholder="Tell us about a project you worked on and a decision you made on it that you would defend."
          invalid={Boolean(errors.message)}
          {...register("message")}
        />
        <FieldHint>
          We are more interested in your judgement than in your job titles.
        </FieldHint>
        <FieldError>{errors.message?.message}</FieldError>
      </Field>

      <Field>
        <div className="flex items-start gap-3">
          <Checkbox
            id="app-consent"
            aria-label="I am happy for Universal Structural Steel Ltd. to process my application"
            checked={Boolean(consent)}
            onCheckedChange={(checked) =>
              setValue("consent", checked === true ? true : (false as never), {
                shouldValidate: true,
              })
            }
          />
          <Label
            htmlFor="app-consent"
            className="font-body text-[0.875rem] leading-relaxed font-normal text-body"
          >
            I am happy for Universal Structural Steel Ltd. to process my application and retain my
            details for twelve months.
          </Label>
        </div>
        <FieldError>{errors.consent?.message}</FieldError>
      </Field>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="mt-1 w-full self-start sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4.5 animate-spin" aria-hidden />
            Submitting…
          </>
        ) : (
          <>
            Submit application
            <Send className="size-4.5" aria-hidden />
          </>
        )}
      </Button>

      <p className="text-[0.8125rem] text-muted">
        Demo build — submissions are simulated and no file leaves the browser.
      </p>
    </form>
  );
}
