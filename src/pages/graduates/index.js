// pages/internship.js
import Head from "next/head";
import BaseLayout from "@/components/Baselayout";
import BottomSection from "@/components/bottomsection";
import styles from "@/components/Graduate_components/graduates.module.css";
import "aos/dist/aos.css"; // Import the AOS styles
import AOS from "aos";
import { useEffect } from "react";
import GraduationSection from "@/components/Graduate_components/GraduatesSection";
import JobsCard from "@/components/Graduate_components/Graduatesjobs";
export default function Internship() {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Head>
        <title>Graduates Program</title>
     
     
      </Head>

      <BaseLayout>
        <main >
    
          <div className={`${styles.bgimg} h-[100vh] pt-20`}>
  

        
          </div>
          <div className={`h-[100vh] p-20 `}>
            <GraduationSection />
          </div>{" "}
          <div className={`h-[100vh]  p-5 mb-11 ${styles.bg_img}`}>
          
        <JobsCard/>
        
        </div>{" "}
        </main>
      </BaseLayout>
      <BottomSection />
    </div>
  );
}
