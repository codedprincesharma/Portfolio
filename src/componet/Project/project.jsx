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
      className="flex flex-col justify-start items-center py-10 px-4 sm:px-6 md:px-10"
    >
      <motion.h1
        variants={childVariant}
        className="mt-10 text-3xl sm:text-4xl md:text-5xl font-extralight text-white text-center"
      >
        My Projects
      </motion.h1>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-10 w-full max-w-6xl">
        {projects.map((title, index) => (
          <motion.div
            key={index}
            variants={childVariant}
            className="w-full sm:w-[45%] lg:w-[30%] h-36 bg-amber-500 rounded-2xl text-xl sm:text-2xl flex justify-center items-center capitalize shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            {title}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
