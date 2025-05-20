"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Reveal = ({ children, className = "" }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
