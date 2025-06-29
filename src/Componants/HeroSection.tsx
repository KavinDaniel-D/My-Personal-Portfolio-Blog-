import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function HeroSection(){
  return (
    <section className=" min-h-screen flex items-center bg-black">

      <Parallax translateX={[0, 20]}>
        <motion.img
          src="src/assets/images/bg-5.jpg"
          alt="Background"
          className=" "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </Parallax>

      <div>
        <Parallax translateX={[0, -20]} speed={-10}>
          <motion.h2
            className="text-white text-5xl font-extrabold drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span>Hi</span>
            <br />
            <span>I'm </span>
            <motion.span
              className="text-amber-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              KAVIN DANIEL
            </motion.span>
          </motion.h2>
        </Parallax>
      </div>
    </section>
  );
};


