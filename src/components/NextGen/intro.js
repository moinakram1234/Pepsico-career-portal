import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./mto.module.css";
import { HiMiniArrowUturnDown } from "react-icons/hi2";
import LoadingBar from "./loading";

export default function Home() {

  const [animationsComplete, setAnimationsComplete] = useState(false);


  const scrollToBottom = () => {
  window.location.href = "/";
  };

  const letterAnimation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  const renderAnimatedText = (text, customStyle) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        initial="hidden"
        animate="visible"
        variants={letterAnimation}
        style={{ display: "inline-block", ...customStyle }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <>
    
      <div className=" flex items-center h-full justify-center">
       
          <motion.div
            className={` w-[35%] h-[35vh]   py-6 flex flex-col items-center  ${styles.mtobg}  rounded-lg justify-center`}
            initial={{ width: "35%", height: "35vh" }}
            animate={{ width: "100%", height: "100vh" }}
            transition={{ duration: 2 }}
            onAnimationComplete={() => setAnimationsComplete(true)}
          >
            <button
              className={`${styles.applynowbutton}`}
              onClick={scrollToBottom}
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                cursor: "pointer",
              }}
            >
              <div className={`${styles.blink}`}>
               
              </div>
              <span>APPLY NOW</span>
            </button>
            <motion.img
              className={`w-[35%] h-[35vh] py-6 flex flex-col items-center  rounded-lg justify-center ${styles.rotatelogo} w-32 h-32 mb-10`}
              src="/logo.png"
              alt="logo"
              initial={{ width: 0, height: 0 }}
              animate={{ width: "10%", height: "30%" }}
              transition={{ duration: 2 }}
            />
            {animationsComplete && (
              <>
                <motion.div
                  className={` font-bold mb-6 text-white ${styles.animatefadeslideup}`}
                  initial={{ fontSize: "10px" }}
                  animate={{ fontSize: "60px" }}
                  transition={{ duration: 1 }}
                >
                  {renderAnimatedText("NextGen", { color: "#fff" })}
                  {renderAnimatedText(" Leader's Program", { color: "#ED1C24" })}
                </motion.div>
              </>
            )}
            {animationsComplete && (
              <p className="text-gray-300 mb-3">
                Show us your potential and join our team by filling in the details below. Your journey towards a rewarding career starts here. Let`&apos;`s embark together on this exciting adventure!
              </p>
            )}
          </motion.div>
       
      </div>
    </>
  );
}
