import { motion } from "motion/react";



const Skills = () => {
  return (
    <motion.div className="w-full h-screen flex flex-col justify-start items-center">
      <h1 className="text-6xl mt-20 capitalize ">I am great at</h1>
      <img src="./tools.png" alt="" />
    </motion.div>
  );
}

export default Skills;
