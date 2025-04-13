import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 2,
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      viewport={{ once: true }}

      className="w-full h-screen flex flex-col justify-start items-center gap-9"
    >
      <motion.h1
        variants={childVariant}
        className="text-6xl mt-20 capitalize"
      >
        I am great at
      </motion.h1>
      <motion.img
        variants={childVariant}
        src="./tools.png"
        alt=""
      />
    </motion.div>
  );
};

export default Skills;
