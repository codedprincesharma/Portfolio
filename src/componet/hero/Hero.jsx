import React, { Suspense } from "react";
import { motion } from "framer-motion";
import "./hero.css";
import Shape from "./shape";
import { Canvas } from "@react-three/fiber";

const awardVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVarient = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const heroImg = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* Title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hName"
        >
          Hey There,
          <br />
          <span>I&apos;m Prince!</span>
        </motion.h1>

        {/* About */}
        <motion.div
          variants={awardVariant}
          initial="initial"
          animate="animate"
          className="award"
        >
          <motion.h2 variants={awardVariant}>
            Full Stack Dev | AI Explorer | 3D Enthusiast
          </motion.h2>
          <motion.p variants={awardVariant}>
            Full Stack Developer exploring the future of the web with AI, 3D,
            and smart integrations. I combine solid MERN stack knowledge with
            cutting-edge tools like Three.js, GSAP, and Python-based AI to build
            experiences that are both functional and futuristic.
          </motion.p>
        </motion.div>
        <a href="#service"></a>
      </div>

      <div className="hSection right">
        {/* Social Media */}
        <motion.div
          variants={followVarient}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVarient}
            href="https://www.instagram.com/codedprince.ee/"
            target="_blank"
          >
            <img src="https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/instagram-logo-png-download-thumbnail-1639242594.jpg" />
          </motion.a>
          <motion.a
            variants={followVarient}
            href="https://github.com/Pincesharma"
            target="_blank"
          >
            <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" />
          </motion.a>
          <motion.a
            variants={followVarient}
            href="https://www.linkedin.com/in/prince-raj-065544330/"
            target="_blank"
          >
            <img
              src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linkedin-icon-logo-png-image_3560495.jpg"
              alt=""
            />
          </motion.a>
          <motion.div variants={followVarient} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg">
        <Canvas className="hero-canvas">
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </Canvas>

        <motion.div
          variants={heroImg}
          initial="initial"
          animate="animate"
          className="hImg"
        >
          <img src="/hero.png" alt="hero" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
