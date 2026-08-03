"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
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
import { enquiryTypes } from "@/data/offices";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(2, "Enter your first name"),
  lastName: z.string().min(2, "Enter your last name"),
  email: z.string().min(1, "Enter your email address").email("Enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (v) => !v || /^[+\d][\d\s()-]{6,}$/.test(v),
      "Enter a valid phone number, or leave this blank",
    ),
  organisation: z.string().min(2, "Enter your organisation"),
  enquiryType: z.string().min(1, "Choose the type of enquiry"),
  message: z
    .string()
    .min(20, "Please give us at least a couple of sentences (20 characters minimum)")
    .max(2000, "Please keep this under 2,000 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you are happy for us to reply" }),
  }),
});

type Values = z.infer<typeof schema>;

export function EnquiryForm({ className }: { className?: string }) {
  const [sent, setSent] = React.useState(false);

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
    defaultValues: { enquiryType: "" },
  });

  const consent = watch("consent");
  const message = watch("message") ?? "";

  const onSubmit = async (_values: Values) => {
    // Demo build — no backend endpoint is connected.
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-5 rounded-[var(--radius-card)] border border-success/30 bg-success/8 p-8 lg:p-10",
          className,
        )}
      >
        <span className="flex size-14 items-center justify-center rounded-2xl bg-success/15 text-success">
          <CheckCircle2 className="size-7" strokeWidth={1.9} aria-hidden />
        </span>
        <div>
          <h3 className="text-[1.5rem] font-bold text-heading">
            Thank you — your enquiry is with us
          </h3>
          <p className="mt-2.5 max-w-[52ch] text-body">
            A named member of the relevant team will respond within two working
            days. Tender and pre-qualification enquiries are routed directly to
            our new business director.
          </p>
        </div>
        <Button variant="outline" size="md" onClick={() => setSent(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex flex-col gap-5", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <Label htmlFor="firstName" required>
            First name
          </Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            {...register("firstName")}
          />
          <span id="firstName-error">
            <FieldError>{errors.firstName?.message}</FieldError>
          </span>
        </Field>

        <Field>
          <Label htmlFor="lastName" required>
            Last name
          </Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            {...register("lastName")}
          />
          <span id="lastName-error">
            <FieldError>{errors.lastName?.message}</FieldError>
          </span>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <Label htmlFor="email" required>
            Work email
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <span id="email-error">
            <FieldError>{errors.email?.message}</FieldError>
          </span>
        </Field>

        <Field>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <span id="phone-error">
            <FieldError>{errors.phone?.message}</FieldError>
          </span>
        </Field>
      </div>

      <Field>
        <Label htmlFor="organisation" required>
          Organisation
        </Label>
        <Input
          id="organisation"
          autoComplete="organization"
          invalid={Boolean(errors.organisation)}
          aria-describedby={errors.organisation ? "organisation-error" : undefined}
          {...register("organisation")}
        />
        <span id="organisation-error">
          <FieldError>{errors.organisation?.message}</FieldError>
        </span>
      </Field>

      <Field>
        <Label htmlFor="enquiryType" required>
          Type of enquiry
        </Label>
        <Select
          id="enquiryType"
          invalid={Boolean(errors.enquiryType)}
          aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
          {...register("enquiryType")}
        >
          <option value="">Select an option…</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <span id="enquiryType-error">
          <FieldError>{errors.enquiryType?.message}</FieldError>
        </span>
      </Field>

      <Field>
        <Label htmlFor="message" required>
          How can we help?
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us about the project — location, sector, indicative value and the constraint you are most concerned about."
          invalid={Boolean(errors.message)}
          aria-describedby="message-hint message-error"
          {...register("message")}
        />
        <div className="flex items-start justify-between gap-4">
          <span id="message-hint">
            <FieldHint>
              The more specific you are, the more useful our first reply will be.
            </FieldHint>
          </span>
          <span className="shrink-0 text-[0.75rem] text-muted tabular-nums">
            {message.length}/2000
          </span>
        </div>
        <span id="message-error">
          <FieldError>{errors.message?.message}</FieldError>
        </span>
      </Field>

      <Field>
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            aria-label="I am happy for Meghna Construct to use these details to respond to my enquiry"
            checked={Boolean(consent)}
            onCheckedChange={(checked) =>
              setValue("consent", checked === true ? true : (false as never), {
                shouldValidate: true,
              })
            }
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <Label htmlFor="consent" className="font-body text-[0.875rem] leading-relaxed font-normal text-body">
            I am happy for Meghna Construct to use these details to respond to
            my enquiry, in line with the privacy notice.
          </Label>
        </div>
        <span id="consent-error">
          <FieldError>{errors.consent?.message}</FieldError>
        </span>
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
            Sending…
          </>
        ) : (
          <>
            Send enquiry
            <Send className="size-4.5" aria-hidden />
          </>
        )}
      </Button>

      <p className="text-[0.8125rem] text-muted">
        Demo build — submissions are simulated and no data leaves the browser.
      </p>
    </form>
  );
}
