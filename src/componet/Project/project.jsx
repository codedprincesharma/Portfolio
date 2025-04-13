import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// 🆕 8 projects added
const projects = [
  "Project-1",
  "Project-2",
  "Project-3",
  "Project-4",
  "Project-5",
  "Project-6",
  "Project-7",
  "Project-8",
];

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="flex flex-col justify-start items-center py-10"
    >
      <motion.h1
        variants={childVariant}
        className="mt-10 text-6xl font-extralight text-white"
      >
        My Projects
      </motion.h1>

      <div className="flex w-full flex-wrap justify-center items-center gap-10 p-10">
        {projects.map((title, index) => (
          <motion.div
            key={index}
            variants={childVariant}
            className="w-80 h-40 bg-amber-500 rounded-3xl text-3xl flex justify-center items-center capitalize shadow-lg"
          >
            {title}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
