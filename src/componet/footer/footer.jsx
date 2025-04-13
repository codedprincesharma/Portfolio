import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className=" text-white py-8 px-6 flex flex-col items-center justify-center gap-4 text-center"
    >
      <div className="text-lg font-semibold">Made with ❤️ by Prince Raj</div>

      <div className="flex gap-5">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
          LinkedIn
        </a>
        <a href="mailto:you@example.com" className="hover:text-blue-400 transition">
          Email
        </a>
      </div>

      <div className="text-sm text-gray-400">© {new Date().getFullYear()} Prince Raj. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
