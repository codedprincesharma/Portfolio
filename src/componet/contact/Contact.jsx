import React from "react";
import { motion } from "framer-motion";
import Footer from "./footer";
function contact() {
  return (
    <div className="w-full h-screen flex-col p-10  from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center">
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl w-full max-w-5xl h-[80vh] flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side with New SVG */}
        <motion.div
          className="md:w-1/2 w-full flex items-center justify-center p-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 h-40 text-white/90"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v1.382a1 1 0 01-.553.894l-9 4.5a1 1 0 01-.894 0l-9-4.5A1 1 0 012 7.382V6z" />
            <path d="M22 8.618v9.764A2 2 0 0120 20H4a2 2 0 01-2-2V8.618l9.447 4.724a3 3 0 002.106 0L22 8.618z" />
          </svg>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          className="md:w-1/2 w-full p-10 text-white"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-md hover:bg-white/30 transition border border-white/30"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default contact;
