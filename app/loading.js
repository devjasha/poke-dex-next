"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <motion.div
        className="h-[200px] w-[200px]"
        style={{ backgroundImage: "url(./images/loading.svg)" }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
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
