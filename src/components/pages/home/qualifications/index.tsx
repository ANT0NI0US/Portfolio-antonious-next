"use client";

import { motion } from "framer-motion";
import Education from "./Education";
import Certificate from "./Certificate";
import TextHead from "@/components/ui/TextHead";

export default function Qualifications() {
  return (
    <section id="qualification" className="py-5 sm:py-10">
      <div className="container">
        <TextHead text="Qualifications" title="Education & Certifications" />
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Education />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Certificate />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
