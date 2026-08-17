import PageHero from "@/components/common/PageHero";
import { buildMetadata } from "@/components/common/Seo";
import AvailableForFreelanceWork from "@/components/pages/contact/AvailableForFreelanceWork";
import ContactForm from "@/components/pages/contact/contactForm";
import ContactInfoCard from "@/components/pages/contact/ContactInfoCard";
import { EmailIcon, PhoneIcon, TimeIcon } from "@/icons";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Antonious Nasr | Contact",
  description:
    "Get in touch to discuss a project, a freelance opportunity, or a frontend development question — usually a reply within 24 hours.",
  path: "/contact",
  keywords: [
    "Contact Antonious Nasr",
    "Hire Frontend Developer",
    "Freelance React Developer",
    "Frontend Developer Egypt",
    "Get In Touch",
  ],
});

const CRUMBS = [{ label: "Home", path: "/" }, { label: "Contact" }];

export default function Contact() {
  return (
    <section className="min-h-screen">
      <PageHero
        eyebrow="contact"
        title="Let's Build Something Great"
        description="Whether it's design, development, or advice, I'm here to help. Send me a note and let's start a conversation."
        crumbs={CRUMBS}
      />

      <div className="container space-y-8 py-8 sm:py-12">
        <AvailableForFreelanceWork />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-6">
          <ContactInfoCard
            icon={EmailIcon}
            label="Email"
            value="antoniousnasr3@gmail.com"
            href="mailto:antoniousnasr3@gmail.com"
          />
          <ContactInfoCard
            icon={PhoneIcon}
            label="WhatsApp"
            value="+20 128 555 1479"
            href="https://wa.me/+201285551479"
          />
          <ContactInfoCard
            icon={TimeIcon}
            label="Response Time"
            value="Within 24 hours"
          />
        </div>

        <div className="flexCenter mb-25 flex-col-reverse gap-0 lg:flex-row lg:gap-5">
          {/* CONTACT IMAGE */}
          <div className="lg:basis-[60%]">
            <Image
              loading="lazy"
              decoding="async"
              src="https://i.ibb.co/yygczq7/Email-Marketing.webp"
              alt="Email marketing illustration"
              width={600}
              height={600}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* CONTACT FORM */}
          <div className="w-full lg:basis-[40%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
