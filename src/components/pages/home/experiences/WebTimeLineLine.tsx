"use client";

import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%" },
};
export default function WebTimeLineLine() {
  return (
    <motion.div
      variants={timelineVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="from-secondary to-primary absolute top-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-linear-to-b md:block"
    />
  );
}
