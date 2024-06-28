import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  // Initialize AOS after components are rendered
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" mx-auto pt-10 bg-[#FBFBFB]  ">
  <img 
  src="/images/nextgen4.png"
  alt="Selection Process"
  className="w-full h-full"
  />
    </div>
  );
}

export default Timeline;

// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Timeline() {
//   // Initialize AOS after components are rendered
//   React.useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div className=" mx-auto pt-10 bg-[#FBFBFB]  ">
//       <h1 className="text-4xl font-bold text-center mb-4">Application process</h1>
//       <div className="flex justify-center items-center">
//         <div className="relative w-full max-w-xl mt-10">
//           {/* Timeline Line */}
//           <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300"></div>

//           {/* Interview */}
//           <div className="relative flex items-center mb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
//             <div className="absolute bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
//              <h1 className="text-white">
//               1
//              </h1>
//             </div>
//             <div className="w-[40%] bg-gray-200 rounded-lg shadow-md p-4 mt-10 ml-auto">
//               <h4 className="text-lg font-semibold mb-2 text-center">Apply</h4>
//             </div>
//           </div>

//           {/* School */}
//           <div className="relative flex items-center mb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
//             <div className="absolute bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
//              <h1 className="text-white">
//               2
//              </h1>
//             </div>
//             <div className="w-[40%] bg-gray-200 rounded-lg shadow-md p-4 mt-10 mr-auto">
//               <h4 className="text-lg font-semibold mb-2 text-center">Interview</h4>
//             </div>
//           </div>

//           {/* Car */}
//           <div className="relative flex items-center mb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
//             <div className="absolute bg-red-500 rounded-full w-8 h-8 flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-8">
//             <h1 className="text-white">3</h1>
//             </div>
//             <div className="w-[40%] bg-gray-200 rounded-lg shadow-md p-4 mt-10 ml-auto">
//               <h4 className="text-lg font-semibold mb-2 text-center">Onboarding</h4>
//             </div>
//           </div>

//           {/* Graduation */}
        
//         </div>
//       </div>
//       <div className="mt-12 flex-1 flex justify-center items-center">
//         <p className="text-lg text-gray-600 max-w-lg text-center">
//           Ready, Set, Apply! Join Haidri Beverages today in 3 simple steps!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Timeline;
