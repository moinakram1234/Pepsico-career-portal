import { useState, useEffect } from 'react';
import styles from "./mto.module.css";
import { motion } from 'framer-motion';

// ...
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
    <div className="flex items-center h-[100vh] justify-center">
      <motion.div 
        className={`flex flex-col w-[35%] h-[35vh] items-center rounded-lg ${styles.mtobg} bg-black justify-center`}
        initial={{ borderRadius: "200px" }}
        animate={{ borderRadius: "0px" }}
        transition={{ duration: 2 }}
      >
        <motion.img
          className={`${styles.loading}  w-32 h-32 mb-10`}
          src="/logo.png"
          alt="logo"
        />
        <div className="bg-gray-200 h-2 w-64 rounded-full relative">
          <div
            className="bg-blue-500 h-2 rounded-full absolute bottom-0"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default LoadingBar;
