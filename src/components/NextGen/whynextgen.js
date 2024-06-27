import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const Whynextgen = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = scrollY/2;

  return (
    <div className="h-full  flex justify-center items-center">
    
        <div className="col-span-2 space-y-3 w-[50%]">

<motion.h1
  className="text-5xl font-bold text-white bg-gray-800"
  initial={{ width: 0 }}
  animate={{ width: scale }}
  transition={{ duration: 1 }}
>
  WHY
</motion.h1>
<motion.h2
  className="text-5xl font-bold text-white bg-gray-800"
  initial={{ width: 0 }}
  animate={{ width: scale }}
  transition={{ duration: 1 }}
>
            NextGen Leader`&apos;`s
            </motion.h2>
          <motion.h3 className="text-2xl font-medium text-white bg-gray-800"
            initial={{ width: 0 }}
            animate={{ width: scale }}
            transition={{ duration: 1 }}>
            PROGRAM
          </motion.h3>
          <p>
          Welcome to the NextGen Leader`&apos;`s Program, where we cultivate the
          leaders of tomorrow. Our program is designed to empower individuals
          with the skills, knowledge, and mindset necessary to thrive in today`&apos;`s
          dynamic world. Through a combination of hands-on training, mentorship,
          and real-world projects, participants embark on a transformative
          journey towards personal and professional growth. Whether you`&apos;`re a
          seasoned professional looking to elevate your leadership skills or a
          fresh graduate eager to make your mark, our program offers
          unparalleled opportunities to unlock your potential and become a
          driving force for positive change. Join us on this exciting adventure
          and unleash your leadership potential with the NextGen Leader`&apos;`s
          Program!
        </p>
        </div>
         
          <div className="w-[50%] p-5">
          <motion.img
    src="https://img.freepik.com/free-vector/hand-drawn-illustration-people-asking-questions_23-2148899857.jpg?t=st=1718343122~exp=1718346722~hmac=78c8e74565ad5469c308a8cd4226589c869575ce885c0aedee536c7156095ab0&w=740"
    alt="Image"
    className="h-auto object-cover"
    initial={{ height: 0 }}
    animate={{ height: "20%" }}
    transition={{ duration: 2 }}
  />
          </div>

    
    </div>
  );
};

export default Whynextgen;
