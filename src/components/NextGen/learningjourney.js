import React from 'react';

export default function LearningJourney() {
  return (
    <div className="h-[100vh] flex flex-col lg:flex-row">
      <div className="lg:w-[70%] w-full">
        <div className="flex flex-col h-full bg-[#E7A956] p-4 lg:p-8">
          <div className="rounded-lg flex flex-col items-center h-full text-center bg-white">
            <h1 className="text-2xl font-bold lg:w-[70%] text-white bg-[#6C59CD] p-2 mb-4">
              YOUR LEARNING JOURNEY
            </h1>
            <div className="mt-10 lg:mt-20 z-10">
              <ul className="text-left space-y-4">
                <li className="text-xl">
                  Receive guidance from a dedicated supervisor/mentor.
                </li>
                <li className="text-xl">
                  Personal assessment exercise to define your career goals and
                  aspirations.
                </li>
                <li className="text-xl">
                  Rotation every 3-6 months to gain diverse experience and
                  skills.
                </li>
                <li className="text-xl">
                  Development plan tailored to your needs and goals.
                </li>
                <li className="text-xl">
                  Program duration: 1 year, with potential early graduation if
                  skills and opportunities align.
                </li>
              </ul>
            </div>
            <p className="font-bold text-lg mt-6">
              We challenge you to grow and achieve new heights in your career.
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-[#E7A956] rounded-br-full rounded-tl-full rounded-tr-full"></div>
            <div className="flex">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#67AEA6] rounded-full lg:mr-20"></div>
              {/* <div className="w-24 h-24 bg-[#E7A956] rounded-full"></div> */}
            </div>
          </div>
          {/* <div className="bg-black flex justify-end mr-20">
            <div className="w-24 h-24 bg-[#E7A956] rounded-full"></div>
          </div> */}
        </div>
      </div>
      <div className="lg:w-[50%] w-full hidden lg:flex  lg:mt-0">
        <img
          src="/images/nextgen3.png"
          alt="whatsinitforyou"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

// import { useEffect } from 'react';
// import Head from 'next/head';
// import { FaGraduationCap, FaUsers, FaClipboardCheck } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Component for each benefit item card
// const BenefitCard = ({ icon, title, text }) => (
//   <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 mb-8" >
//     <div className="flex items-center mb-2">{icon}</div>
//     <h2 className="text-xl font-bold mb-2">{title}</h2>
//     <p className="text-gray-700">{text}</p>
//   </div>
// );

// export default function WhatsInItForYou() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       offset: 200, // Offset (in px) from the original trigger point
//       easing: 'ease-in-out', // Easing function
//       delay: 100, // Delay animation
//     });
//   }, []);

//   return (
//     <div className="bg-[#2F2EA6] ">
//       <Head>
//         <title>What's In It For You?</title>
//         <meta name="description" content="Explore what our internship program offers." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container p-4 mt-36">
//         <div className="flex flex-col items-center ">
//           <h1 className="text-4xl font-bold text-center text-white mb-4">What's In It For You?</h1>
//           <p className="text-lg text-center text-white mb-8">
//             Our internship program offers a holistic approach to learning, focusing on enhancing your work-readiness.
//             You`&apos;`ll have the opportunity to learn alongside other talented interns working at different organizations and
//             network with mentors from various fields.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" >
//            <div data-aos="fade-up" data-aos-delay={300}>
//            <BenefitCard
//               icon={<FaGraduationCap className="text-blue-500 h-5 w-5 mb-2" />}
//               title="Hands-on experience"
//               text="Get involved in real-world projects to gain practical skills."
//             />
//            </div>
//            <div data-aos="fade-up" data-aos-delay={300}>
//            <BenefitCard
//               icon={<FaUsers className="text-blue-500 h-5 w-5 mb-2" />}
//               title="Networking opportunities"
//               text="Connect with industry professionals and expand your network."
//             />
//            </div>
//          <div data-aos="fade-up" data-aos-delay={300}>
//          <BenefitCard
//               icon={<FaClipboardCheck className="text-blue-500 h-5 w-5 mb-2" />}
//               title="Professional development"
//               text="Attend workshops and training sessions to enhance your skills."
//             />
//          </div>
//           <div data-aos="fade-up" data-aos-delay={300}>
//           <BenefitCard
//               icon={<FaUsers className="text-blue-500 h-5 w-5 mb-2" />}
//               title="Expert mentorship"
//               text="Receive guidance from experienced mentors in your field."
//             />
//           </div>
//          <div data-aos="fade-up" data-aos-delay={300}>
//          <BenefitCard
//               icon={<FaGraduationCap className="text-blue-500 h-5 w-5 mb-2" />}
//               title="Diverse perspectives"
//               text="Explore various projects and gain exposure to different viewpoints."
//             />
//          </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
