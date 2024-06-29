import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./mto.module.css";
import { IoIosArrowDown } from "react-icons/io";
import ProgramOverview from "./programoverview";
import LearningJourney from "./learningjourney";
import  ApplicationProcess from "./app_process" 
import IdealCandidate from "./mtoabout"
import Footer from "./footer"
const Home = () => {
  const text = "NextGen Leaders Program";
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        initial={{ width: "100%", height: "10vh", backgroundColor: "yellow" }}
        animate={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#2f2ea6",
        }}
        transition={{ duration: 2 }}
      >
        <div className="bg-[#2f2ea6] h-44 md:h-44 flex">
          <div className="-m-5">
            <div className={styles.drop}></div>
          </div>
          <div className="flex w-full justify-center">
            <img
              src="/images/herologo.png"
              alt="Logo"
              className="w-96 h-40 md:w-96 md:h-40"
            />
          </div>
          <div className="relative h-full">
            <div
              className={`absolute bottom-0 z-20 right-0 `}
              style={{ transform: "translate(0%, 60%)" }}
            >
              <div className=" w-24 h-24 md:w-52 md:h-52 bg-[#21C1F5] rounded-tl-full rounded-tr-full rounded-bl-full"></div>
            </div>
          </div>
        </div>
        <hr className="border-2 border-[#E7A956] "></hr>
        <div className="flex justify-center items-center mt-20 md:mt-20">
          <div className="text-center space-y-5">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 1.5 }}
              className="text-3xl md:text-5xl font-semibold text-[#FFA500] font-poppins"
            >
              Welcome to the
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-3xl md:text-5xl font-semibold text-[#21C1F5] font-poppins"
            >
              {text.split("").map((letter, index) => (
                <motion.span key={index} variants={item}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="mt-16 md:mt-32">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            }}
            className="flex justify-center text-white items-center"
          >
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="h-10 w-5 md:h-14 md:w-7 rounded-lg bg-white flex justify-center">
                  <div className="h-2 w-2 rounded-full bg-black mt-2"></div>
                </div>
                <IoIosArrowDown size={30} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div>
        <div className="relative h-full">
          <div
            className="absolute bottom-0 z-20 right-0"
            style={{ transform: "translate(20%, 60%)" }}
          >
            <div className="w-24 h-24 md:w-52 hidden md:flex md:h-52 bg-[#E7A956] rounded-tl-full rounded-tr-full rounded-br-full"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-screen bg-gray-200">
          <div className="flex flex-col justify-center p-10  bg-white md:w-1/2 w-full">
            <div className="md:flex items-center ">
           <div className=" flex justify-center">
           <img
                src="/images/logo.png"
                alt="NextGen Logo"
                className="w-56 h-44 md:w-44 md:h-32"
              />
           </div>
              <h2 className="text-xl md:text-2xl md:font-bold pb-10 md:pb-0 text-gray-900">
                Lead the Change, Be the Change
              </h2>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                Ready to unlock your potential?
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              Unleash your inner strength and become the leader you're meant to
              be.
            </p>
            <p className="text-gray-700 mt-4">
              Join us to learn, grow, and make a real impact. You'll gain new
              skills, build connections, and turn your dreams into achievable
              goals.
            </p>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-purple-500"></div>
         <div className="flex space-x-4 mt-4 md:h md:hidden">
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-red-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-green-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-blue-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-purple-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-pink-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-orange-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-teal-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-indigo-500"></div>
<div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-lime-500"></div>
</div>
          </div>
          <div className="w-full hidden md:flex md:w-1/2 relative">
            <img
              src="/images/n1.png"
              alt="NextGen Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <ProgramOverview/>
      <LearningJourney/>
      <ApplicationProcess />
      <IdealCandidate/>
      <Footer/>
    </>
  );
};

export default Home;
