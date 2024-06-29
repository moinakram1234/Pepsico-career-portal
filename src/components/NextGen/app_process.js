import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  // Initialize AOS after components are rendered
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative mx-auto mt-64 lg:mt-0 bg-[#FFFFFF]">
   <h1 className="text-4xl font-bold text-center mb-4 pt-10 relative z-10">Selection process</h1>
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-xl mt-10">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300"></div>

          {/* Interview */}
          <div
            className="relative flex flex-col md:flex-row items-center mb-20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="absolute bg-gray-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
              <img
                src="/images/s1.webp"
                alt="Selection Process"
                className="w-full h-full"
              />
            </div>
            <div className="w-[80%] md:w-[40%] bg-[#67AEA6] rounded-lg shadow-md p-4 mt-10 md:ml-auto">
              <h4 className="text-lg text-white mb-2 text-center">
                SUBMIT YOUR JOB APPLICATION & CV
              </h4>
            </div>
          </div>

          {/* School */}
          <div
            className="relative flex flex-col md:flex-row items-center mb-20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="absolute bg-yellow-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
              <img
                src="/images/s2.webp"
                alt="Selection Process"
                className="w-full h-full"
              />
            </div>
            <div className="w-[80%] md:w-[40%] bg-[#FEB7B2] rounded-lg shadow-md p-4 mt-10 md:mr-auto">
              <h4 className="text-lg  mb-2 text-white text-center">
                APPEAR FOR TEST/ ASSESSMENT CENTER
              </h4>
            </div>
          </div>

          {/* Car */}
          <div
            className="relative flex flex-col md:flex-row items-center mb-20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="absolute bg-red-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
              <img
                src="/images/s3.webp"
                alt="Selection Process"
                className="w-full h-full"
              />
            </div>
            <div className="w-[80%] md:w-[40%] bg-[#6C59CD] rounded-lg shadow-md p-4 mt-10 md:ml-auto">
              <h4 className="text-lg  mb-2 text-white text-center">
                FIRST INTERVIEW WITH LINE AND HR
              </h4>
            </div>
          </div>

          {/* Graduation */}
          <div
            className="relative flex flex-col md:flex-row items-center mb-20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="absolute bg-yellow-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
              <img
                src="/images/s4.webp"
                alt="Selection Process"
                className="w-full h-full"
              />
            </div>
            <div className="w-[80%] md:w-[40%] bg-[#2F2EA6] rounded-lg shadow-md p-4 mt-10 md:mr-auto">
              <h4 className="text-lg  text-white mb-2 text-center">
                PANEL INTERVIEW
              </h4>
            </div>
          </div>

          <div
            className="relative flex flex-col md:flex-row items-center mb-20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="absolute bg-red-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
              <img
                src="/images/s5.webp"
                alt="Selection Process"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
            <div className="w-[80%] md:w-[40%] bg-[#E7A956] rounded-lg shadow-md p-4 mt-10 md:ml-auto">
              <h4 className="text-lg  text-white mb-2 text-center">
                SELECTION
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex-1 flex justify-center items-center">
        <p className="text-lg text-gray-600 max-w-lg text-center z-10">
          Ready, Set, Apply! Join Haidri Beverages today in 5 simple steps!
        </p>
      </div>

      {/* Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div   data-aos="fade-up" className="absolute  bg-[#E7A956] rounded-tr-full rounded-bl-full rounded-br-full w-16 h-16 md:w-32 md:h-32"></div>
        <div   data-aos="fade-up" className="absolute hidden lg:flex bg-[#6C59CD] rounded-full w-10 h-10 md:w-20 md:h-20 top-20 left-40"></div>
        <div   data-aos="fade-up" className="absolute bg-[#FEB7B2] rounded-full w-4 h-4 md:w-8 md:h-8 top-40 left-80"></div>
        <div   data-aos="fade-up" className="absolute hidden lg:flex bg-purple-500 rounded-full w-16 h-16 md:w-32 md:h-32 top-60 left-20"></div>
        <div   data-aos="fade-down" className="absolute bg-[#21C1F5] rounded-tr-full rounded-bl-full rounded-tl-full w-16 h-16 md:w-32 md:h-32 bottom-0 right-0"></div>
        <div data-aos="fade-down" className="absolute bg-[#6C59CD] rounded-full w-10 h-10 md:w-20 md:h-20 bottom-20 right-40"></div>
        <div data-aos="fade-down" className="absolute bg-[#FEB7B2] rounded-full w-4 h-4 md:w-8 md:h-8 bottom-40 right-80"></div>
        <div data-aos="fade-down" className="absolute hidden lg:flex bg-purple-500 rounded-full w-16 h-16 md:w-32 md:h-32 bottom-60 right-20"></div>
      </div>
    </div>
  );
}

export default Timeline;
