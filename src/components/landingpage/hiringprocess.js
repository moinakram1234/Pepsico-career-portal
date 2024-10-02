import { HiringProcess } from "@/Data/staticData";
import styles from "./ImageSlider.module.css";
import "aos/dist/aos.css"; // Import the AOS styles
import AOS from "aos";
import { useEffect } from "react";
export default function HireProcess() {
    useEffect(() => {
        AOS.init({ duration: 1500, delay:500 });
      }, []);
  return (
    <div className=" justify-center min-h-screen bg-blue-500 text-white md:bg-green-500 lg:bg-red-500">
      <div className="flex justify-center">
        <h1 className="text-white text-3xl font-bold">HIRING</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-white text-xl  mb-3">
          THERE ARE THREE STEPS TO OUR HIRING PROCESS.
        </h1>
      </div>
     <div className="">
      <div>
      {HiringProcess.map((item, index) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-2 shadow-lg  max-w-lg ml-5 relative"
          style={{ top: `${index * 10}px`, left: `${index * 400}px` }}
            data-aos="fade-left"
        >
          <div className=" items-center mb-4">
            <div className="flex bg-black p-1 rounded-full text-white ">
              <div className="bg-blue-700 text-sm text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {item.id}
              </div>
              <p className="ml-4 text-sm font-semibold">{item.text}</p>
            </div>
            <p className="ml-4 text-sm font-semibold">{item.content}</p>
          </div>

          {index < HiringProcess.length - 1 && (
            <div
              className={`${styles.animatedarrow} absolute w-0 h-0  border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white`}
              style={{
                top: "50%",
                left: "100%",
                transform: "translateY(-50%)",
              }}
            >
              {index < HiringProcess.length - 1 && (
                <div className={`${styles.curvedarrow}`}></div>
              )}
            </div>
          )}
        </div>
      ))}
      </div>
     </div>
    </div>
  );
}
