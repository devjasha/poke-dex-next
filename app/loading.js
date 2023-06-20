"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center px-1/2">
      <motion.div
        style={{
          backgroundImage: "url(./images/loading.svg)",
          height: "50px",
          width: "50px",
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default Loading;
