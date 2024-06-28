import { useState, useEffect } from "react";
import styles from "./mto.module.css";
import { motion } from "framer-motion";

function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.bg}>
        <motion.div
          className={styles.logoContainer}
          animate={{
            scale: [1, 1.2, 1.2, 1],
            rotate: [0, 360, 360, 0],
            borderRadius: ["0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </motion.div>
        <span className="text-xl md:text-4xl font-bold  p-10 text-[#2E3192]
        
        
        ">Haidri Beverages Private Limited</span>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progress}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className={styles.progressText}>{progress}%</div>
      </div>
    </div>
  );
}

export default LoadingBar;