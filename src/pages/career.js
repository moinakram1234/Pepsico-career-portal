import BaseLayout from "@/components/Baselayout";
import CareerSection from "@/components/landingpage/careersection";
import BottonSection from "@/components/bottomsection";
import  EXPLORECAREER from "@/components/landingpage/exploreCareer";
import Studentsection from "@/components/landingpage/studentsection";
import CareerArea from "@/components/landingpage/careerArea";
import HireProcess from "@/components/landingpage/hiringprocess";
const Career = () => {
 
  return (
    <div>
        <BaseLayout>
        <CareerSection/>
        <CareerArea/>
        <EXPLORECAREER/>
        <Studentsection/>
        <HireProcess/>
        <BottonSection />
      
        </BaseLayout>
        </div>

  );
};

export default Career;
