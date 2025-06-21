import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="text-white py-8 px-4 sm:px-6 flex flex-col items-center justify-center gap-4 text-center bg-black/10 backdrop-blur-md"
    >
      {/* Footer Title */}
      <div className="text-lg font-semibold text-center">
        Made with <span className="text-red-400">❤️</span> by Prince Raj
      </div>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:you@example.com"
          className="hover:text-blue-400 transition"
        >
          Email
        </a>
      </div>

      {/* Copyright */}
      <div className="text-xs text-gray-400 mt-2">
        © {new Date().getFullYear()} Prince Raj. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
