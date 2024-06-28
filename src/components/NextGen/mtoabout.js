import Head from "next/head";
import Image from "next/image";

export default function IdealCandidate() {
  return (
    <div className=" h-[100vh]">
      <main className="flex">
        <div className="w-[70%]">
          <div className="mt-5 flex justify-end mr-36">
            <div className="  w-24  -z-10 h-24  bg-[#21C1F5] rounded-full"></div>
          </div>
          <div className=" ml-20 w-[60%] ">
            <h1 className="text-6xl w-full bg-[#EBEEF9] p-3">
              Ideal Candidate
            </h1>
            <div className="mt-10">
              <p className="text-lg mb-8">
                {" "}
                - Embraces challenges and is driven to succeed
              </p>
              <p className="text-lg mb-8">
                - Analyzes complex problems and develops innovative solutions
              </p>
              <p className="text-lg mb-8">
                - Absorbs information quickly and thinks creatively
              </p>
              <p className="text-lg mb-8">- Self-motivated and resilient</p>
              <p className="text-lg mb-8">- Confident in their abilities</p>
              <p className="text-lg mb-8">
                We'll provide the support and guidance you need to reach your
                full potential, and team you up with our experienced
                professionals who are passionate about delivering exceptional
                results.
              </p>
            </div>
          </div>
         <div className="flex justify-between">
         <div className="  w-24  -z-10 h-24  ml-20 bg-[#FFC54A] rounded-full"></div>
         <div className="bg-[#EBEEF9] pl-14">
         <div className="  w-24  -z-10 h-24   bg-[#2F2EA6] rounded-full"></div>
         </div>
         </div>
        </div>
        <div className="w-[30%]">
          <img
            src="/images/nextgen5.png"
            alt="ideal candidate"
            className="w-full h-full"
          />
        </div>
      </main>
    </div>
  );
}
// import { useEffect, useState } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";;
// import styles from "./mto.module.css";
// const IdealCandidate = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: false,
//     });

//     window.addEventListener('scroll', () => {
//       AOS.refresh();
//     });
//   }, []);
//   return (
//     <div>
//         <div className={`${styles.fullPageImage}`} >
//                <div className="flex h-screen  ">
//      <div className={`place-content-center ml-10  p-8 w-[50%] `}>
//         {/* <div className="flex mb-6 ">
//           <img src="/logo.png" alt="Pepsi Logo" className="w-24 h-24"  />
//         </div> */}
//        <div className=" p-10 rounded-lg">
//        <h2 className="text-3xl  font-bold mb-4 text-left p-2 " data-aos="fade-right">About Us...</h2>
//       <div data-aos="fade-left">
//       <p className=" text-lg  mb-4 text-left  text-gray-500 ">

//          We are one of the largest franchise groups of Pepsi Cola International,
//          </p>
//        <p className=" text-lg  mb-4 text-left text-gray-500  ">
//          covering the whole AJK, KPK, Gilgit-Baltistan, Federal Capital adventure
//        </p>
//        <p className=" text-lg  mb-4 text-left text-gray-500  ">
//         Northern Punjab. We are the bottler of all SKUs of Pepsi Cola products</p>
//        <p className=" text-lg  mb-4 text-left text-gray-500  ">
//        as per approved quality standards of Pepsi Cola International. Our
//        </p>
//        <p className=" text-lg  mb-4 text-left  text-gray-500 ">
//           Production Team is striving hard to produce best quality products and
//        </p>
//        <p className=" text-lg  mb-4 text-left  text-gray-500 ">
//        Field Team is delivering at their best to fulfill customer`&apos;`s satisfaction.
//        </p>
//       </div>

//         </div>
//       </div>
//       <div className="pl-20 w-[50%] bg-red place-content-center ">

//         </div>
//     </div>

//             </div>
//     </div>
//   );
// };

// export default IdealCandidate;
