import React from "react";
import { motion } from "framer-motion";

const slists = [
  {
    id: 1,
    img: "/service1.png",
    title: "Full-Stack Web Development",
    counter: 9,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "AI Integration",
    counter: 6,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Creative 3D Websites & Animations",
    counter: 5,
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row px-4 py-10">
      
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 gap-9">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center leading-tight">
          How do I Help
        </h1>

        <div className="w-full max-w-xl grid grid-cols-1 gap-6">
          {slists.map((service) => (
            <motion.div
              key={service.id}
              className="border border-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex items-center gap-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 * service.id, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-300">{service.counter}+ Projects</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side (3D model area) */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 py-10">
        <motion.div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl border flex justify-center items-center"
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-xl font-medium">3D Model Area</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
