import React from "react";
import { motion } from "framer-motion";

function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 18,
  once = true,
  amount = 0.8,
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
