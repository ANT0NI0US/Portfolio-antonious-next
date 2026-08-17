"use client";

import { EmailIcon, PhoneIcon, TypeIcon } from "@/icons";
import Button from "@/components/ui/Button";
import GridContainer from "@/components/ui/GridContainer";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "./Input";
import TextArea from "./TextArea";

interface ContactFormValues {
  user_name: string;
  user_last_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const initialState: ContactFormValues = {
  user_name: "",
  user_last_name: "",
  user_email: "",
  user_phone: "",
  message: "",
};

const isOnlySpaces = (value: string) => {
  return !value.trim();
};

const EMAILJS_SERVICE_ID = "service_yijk9v8";
const EMAILJS_TEMPLATE_ID = "template_dolvl3a";
const EMAILJS_PUBLIC_KEY = "5MRR9-mIUN-47nrvy";

const AUTO_DISMISS_MS = 4000;

interface FormStatus {
  type: "success" | "error" | "";
  message: string;
}

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<ContactFormValues>({
    mode: "onSubmit",
    defaultValues: initialState,
  });

  useEffect(() => {
    if (!formStatus.message) return;

    const timer = setTimeout(() => {
      setFormStatus({ type: "", message: "" });
    }, AUTO_DISMISS_MS);

    return () => clearTimeout(timer);
  }, [formStatus.message]);

  const sendEmail = () => {
    if (!formRef.current) return;

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setFormStatus({
            type: "success",
            message: "Form submitted successfully!",
          });
          reset();
        },
        () => {
          setFormStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        },
      );
  };
  return (
    <form
      ref={formRef}
      // `sendEmail` reads formRef.current only when it actually runs (on
      // submit), never during render. Confirmed against a real send: using
      // the submit event's target instead of this ref dropped all field
      // values from the delivered email, so this stays ref-based on purpose.
      // eslint-disable-next-line react-hooks/refs
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col gap-6"
    >
      <GridContainer styles="sm:grid! sm:grid-cols-2!">
        <Controller
          name="user_name"
          control={control}
          rules={{
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: 3,
              message: "Enter at least 3 letters",
            },
            maxLength: {
              value: 15,
              message: "You have exceeded the max length (15)",
            },
          }}
          render={({ field }) => (
            <Input
              field={field}
              placeholder="First Name"
              Icon={<TypeIcon />}
              disabled={isSubmitting}
              error={errors?.user_name?.message}
            />
          )}
        />

        <Controller
          name="user_last_name"
          control={control}
          rules={{
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: 3,
              message: "Enter at least 3 letters",
            },
            maxLength: {
              value: 15,
              message: "You have exceeded the max length (15)",
            },
          }}
          render={({ field }) => (
            <Input
              field={field}
              placeholder="Last Name"
              Icon={<TypeIcon />}
              disabled={isSubmitting}
              error={errors?.user_last_name?.message}
            />
          )}
        />
      </GridContainer>

      <Controller
        name="user_email"
        control={control}
        rules={{
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Enter a valid email.",
          },
        }}
        render={({ field }) => (
          <Input
            field={field}
            placeholder="Email"
            Icon={<EmailIcon />}
            disabled={isSubmitting}
            error={errors?.user_email?.message}
          />
        )}
      />

      <Controller
        name="user_phone"
        control={control}
        rules={{
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: /^(\+?\d{1,3})? ?\d{10,15}$/,
            message: "Enter a valid mobile phone number.",
          },
        }}
        render={({ field }) => (
          <Input
            field={field}
            placeholder="Phone"
            disabled={isSubmitting}
            Icon={<PhoneIcon />}
            error={errors?.user_phone?.message}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        rules={{
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
        }}
        render={({ field }) => (
          <TextArea
            field={field}
            placeholder="Message"
            disabled={isSubmitting}
            error={errors?.message?.message}
          />
        )}
      />

      <div>
        <Button type="submit" aria_label="Submit Form" loading={isSubmitting}>
          <span>Submit</span>
        </Button>

        <AnimatePresence>
          {formStatus.message && (
            <motion.p
              key={formStatus.message}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-1 text-center text-sm ${
                formStatus.type === "success" ? "text-light" : "text-error"
              }`}
            >
              {formStatus.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
