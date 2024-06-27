import { useEffect } from 'react';
import Head from 'next/head';
import { FaGraduationCap, FaUsers, FaClipboardCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component for each benefit item card
const BenefitCard = ({ icon, title, text }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 mb-8" >
    <div className="flex items-center mb-2">{icon}</div>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{text}</p>
  </div>
);

export default function WhatsInItForYou() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function
      delay: 100, // Delay animation
    });
  }, []);

  return (
    <div className="bg-[#C5EAF0] ">
      <Head>
        <title>What`&apos;`s In It For You?</title>
        <meta name="description" content="Explore what our internship program offers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container p-4 mt-36">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-center mb-4">What`&apos;`s In It For You?</h1>
          <p className="text-lg text-center mb-8">
            Our internship program offers a holistic approach to learning, focusing on enhancing your work-readiness.
            You`&apos;`ll have the opportunity to learn alongside other talented interns working at different organizations and
            network with mentors from various fields.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" >
           <div data-aos="fade-up" data-aos-delay={300}>
           <BenefitCard
              icon={<FaGraduationCap className="text-blue-500 h-5 w-5 mb-2" />}
              title="Hands-on experience"
              text="Get involved in real-world projects to gain practical skills."
            />
           </div>
           <div data-aos="fade-up" data-aos-delay={300}>
           <BenefitCard
              icon={<FaUsers className="text-blue-500 h-5 w-5 mb-2" />}
              title="Networking opportunities"
              text="Connect with industry professionals and expand your network."
            />
           </div>
         <div data-aos="fade-up" data-aos-delay={300}>
         <BenefitCard
              icon={<FaClipboardCheck className="text-blue-500 h-5 w-5 mb-2" />}
              title="Professional development"
              text="Attend workshops and training sessions to enhance your skills."
            />
         </div>
          <div data-aos="fade-up" data-aos-delay={300}>
          <BenefitCard
              icon={<FaUsers className="text-blue-500 h-5 w-5 mb-2" />}
              title="Expert mentorship"
              text="Receive guidance from experienced mentors in your field."
            />
          </div>
         <div data-aos="fade-up" data-aos-delay={300}>
         <BenefitCard
              icon={<FaGraduationCap className="text-blue-500 h-5 w-5 mb-2" />}
              title="Diverse perspectives"
              text="Explore various projects and gain exposure to different viewpoints."
            />
         </div>
          </div>
        </div>
      </main>
    </div>
  );
}
