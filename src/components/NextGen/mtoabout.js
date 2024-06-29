import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function IdealCandidate() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="min-h-screen">
      <main className="flex flex-col md:flex-row">
        <div className="md:w-7/12 w-full p-4">
          <div className="mt-5 flex justify-end md:mr-36" data-aos="fade-up">
            <div className="w-24 h-24 bg-[#21C1F5] rounded-full"></div>
          </div>
          <div className="mt-4 md:ml-20 w-full md:w-3/4" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl w-full bg-[#EBEEF9] p-3">
              Ideal Candidate
            </h1>
            <div className="mt-6 md:mt-10">
              <p className="text-base md:text-lg mb-4 md:mb-8" data-aos="fade-in">
                - Embraces challenges and is driven to succeed
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-8" data-aos="fade-in" data-aos-delay="100">
                - Analyzes complex problems and develops innovative solutions
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-8" data-aos="fade-in" data-aos-delay="200">
                - Absorbs information quickly and thinks creatively
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-8" data-aos="fade-in" data-aos-delay="300">
                - Self-motivated and resilient
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-8" data-aos="fade-in" data-aos-delay="400">
                - Confident in their abilities
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-8" data-aos="fade-in" data-aos-delay="500">
                We'll provide the support and guidance you need to reach your full potential, and team you up with our experienced professionals who are passionate about delivering exceptional results.
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 md:mt-10">
            <div className="w-24 h-24 ml-4 md:ml-20 bg-[#FFC54A] rounded-full" data-aos="fade-up"></div>
            <div className="bg-[#EBEEF9] p-4 md:pl-14" data-aos="fade-left">
              <div className="w-24 h-24 bg-[#2F2EA6] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 w-full hidden lg:flex md:mt-0">
          <img
            src="/images/nextgen5.png"
            alt="ideal candidate"
            className="w-full h-full object-cover"
            data-aos="fade-in"
          />
        </div>
      </main>
     
    </div>
  );
}
