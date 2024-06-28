import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Programoverview = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = scrollY / 2;

  return (
    <div className="md:flex md:flex-wrap mt-44 h-[100vh] lg:mt-10">
      <div class="w-full lg:w-1/2">
  <div class="flex flex-wrap h-full w-full">
    <div class="w-full lg:w-[55%] rounded-br-full rounded-bl-full h-full bg-[#2F2EA6] z-10 lg:ml-5 lg:ml-20 border">
      <div class="h-[35%] w-full flex" data-aos="fade-right">
        <div class="h-full w-[50%] rounded-br-full rounded-bl-full bg-[#6C59CD]"></div>
        <div class="rounded-full border w-[50%] h-[80%] bg-[#FEB7B2] mt-5 lg:mt-10">
          <img src="/images/po1.webp" alt="programoverview" class="w-full h-full" data-aos="zoom-in-up" />
        </div>
      </div>
      <div class="h-[60%] w-full flex">
        <div class="relative w-[50%] h-[80%]">
          <div class="rounded-full w-full h-full bg-[#FEB7B2]"></div>
          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[60%] bg-[#4D899E] rounded-full overflow-hidden">
            <img src="/images/po2.webp" alt="programoverview" class="w-full h-full rounded-full object-cover" data-aos="zoom-in-up" />
          </div>
        </div>
        <div class="relative w-[50%] h-[80%]">
          <div class="rounded-full w-full h-full bg-[#21C1F5]"></div>
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[60%] bg-[#da463c] rounded-full overflow-hidden">
            <img src="/images/po3.webp" alt="programoverview" class="absolute bottom-0 transform -translate-x-1/2 w-full h-full object-cover" data-aos="zoom-in-up" />
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full lg:w-[44%] rounded-br-full rounded-bl-full h-[70%] -ml-5 lg:-ml-20 bg-[#4D899E]">
      <div class="absolute right-0 bg-[#67AEA7] w-[65%] z-10 rounded-bl-full rounded-br-full h-[60%]">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffcc00] w-[98%] h-[69%] rounded-full overflow-hidden">
          <img src="/images/po4.webp" alt="Descriptive text" class="w-full h-full object-cover" data-aos="zoom-in-up" />
        </div>
      </div>
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#2C6CFA] w-full h-[70%] rounded-full">
        <div class="absolute top-0 left-0 bg-[#21C1F5] w-[50%] h-[50%] rounded-full"></div>
        <div class="absolute bottom-5 right-6 bg-[#67AEA7] w-[55%] h-[50%] rounded-full overflow-hidden">
          <img src="/images/po5.webp" alt="Descriptive text" class="w-full h-full object-cover rounded-full" data-aos="zoom-in-up" />
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="w-full lg:w-1/2">
        <main className="flex flex-col items-center justify-center p-4">
          <div className="w-full lg:w-[60%]">
            <h1 className="text-5xl mt-20 font-bold text-center mb-4" data-aos="fade-in">
              <div className="absolute rounded-full w-24 -z-10 h-24 -m-10 bg-[#EBEEF9]"></div>
              PROGRAM OVERVIEW
              <div className="flex justify-end mt-9">
                <div className="absolute rounded-full w-10 -z-10 h-10 -m-10 mr-10 bg-[#febfb2]"></div>
              </div>
            </h1>
            <div>
              <p className="text-lg mb-8" data-aos="fade-up">
                Embark on a challenging, hands-on adventure from day one. Our NextGen Leaders Program offers a dynamic and supportive environment with guidance, feedback, and on-the-job training.
              </p>
              <p className="text-lg mb-8" data-aos="fade-up">
                Develop your expertise, gain valuable experience, and get ready to launch a rewarding career.
              </p>
            </div>
          </div>
        </main>
        <div className="mt-32" data-aos="fade-up">
          <div className="rounded-full w-24 -z-10 h-24 -m-10 bg-[#6C59CD]"></div>
        </div>
        <div className="flex justify-end mt-5" data-aos="fade-down">
          <div className="w-32 -z-10 h-32 bg-[#21C1F5] rounded-bl-full rounded-tl-full rounded-tr-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Programoverview;
