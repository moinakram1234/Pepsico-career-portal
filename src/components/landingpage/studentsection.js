
import { CheckCircleIcon } from "@chakra-ui/icons";
import "aos/dist/aos.css"; // Import the AOS styles
import React, { useEffect } from "react";
import AOS from "aos";
import styles from "./ImageSlider.module.css"
import { useSelector } from "react-redux";
import Link from "next/link";
const data = [
  {
    title: "STUDENTS",
    description:
      "Are you a student looking to gain practical experience and kick-start your career in the beverage industry? Our internship program offers a valuable opportunity to work alongside seasoned professionals, gain hands-on experience in various departments, and contribute to exciting projects. We believe in nurturing young talent and providing a supportive learning environment that fosters growth and development.",
    icon: CheckCircleIcon,
    url: "/students",
  },
  {
    title: "FRESH GRADUATES",
    description:
      "Are you a recent graduate with a passion for beverages and a hunger for growth? Our Management Trainee Program is designed to groom aspiring individuals into future leaders. As a Management Trainee, you will undergo a comprehensive training program that encompasses various aspects of our business, including marketing, sales, operations, and more. This program offers a fast-track career path, providing you with the skills, knowledge, and exposure needed to thrive in a dynamic industry.",
    icon: CheckCircleIcon,
    url: "/graduates",
  },
  {
    title: "PROFESSIONALS",
    description:
      "Are you an experienced professional seeking new challenges and opportunities? Join our talented team and contribute your expertise to shaping the future of our industry. We provide a stimulating and collaborative work environment where you can grow, innovate, and make a real impact.",
    icon: CheckCircleIcon,
    url: "/experienced",
  },
];

const DataList = () => {
  const darkMode = useSelector((state) => state.darkMode);


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (<div className="flex flex-col bg-[#fffff]  items-center">
    <h1 className="lg:text-3xl font-bold text-lg  rounded-t-2xl text-center bg-[#201F7C] p-5 text-white " data-aos="fade-left ">Opportunities for Students, Graduates, and Professionals.


    </h1>
    <div className="lg:flex  lg:p-32 px-12 pt-10 gap-5 w-full    bg-[#201F7C] ">
       
      {data.map((item, index) => {
        let animation;
        if (index % 3 === 0) {
          animation = "fade-left";
        } else if (index % 3 === 1) {
          animation = "fade-up";
        } else {
          animation = "fade-right";
        }

        return (
          <div key={index} className=" flex justify-center   py-2">
            <div   data-aos={animation} class="bg-[#ffffff] w-[100%] max-w-xl  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" h-full">
      <a href={item.url} className="flex justify-center ">
              <img
                class="rounded-t-lg"
                src="/logo.png"
                width={100}
                alt="your Browser does not support the image tag"
              />
            </a>
            <div class=" p-5">
          <div>
          <a href={item.url}>
                <h5 class=" text-2xl flex items-center justify-center text-center  font-bold tracking-tight text-black dark:text-black">
                 {item.title}
                </h5>
              </a>
          </div>
          <div>
                 <p className=" mt-2 font-normal h-[300px] text-black dark:text-gray-400 flex   text-justify">
            {item.description}
          </p>
          </div>
              <div className=" h-full ">
             <a
                href={item.url}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
             </div>
            </div>
      </div>
          </div>
         
          </div>
        );
      })}
    </div> <div class={`${styles.wavedivider} `}>
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-[#201F7C]"></path>
  </svg>
</div></div>
  );
}

export default DataList;
