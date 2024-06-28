import React, { useState, useEffect } from "react";
import Intro from "@/components/NextGen/intro";

import LoadingBar from "@/components/NextGen/loading";

import ApplicationProcess from "@/components/NextGen/app_process";
import MtoAbout from "@/components/NextGen/mtoabout";

const Index = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingComplete && <LoadingBar />}
      {loadingComplete && (
        <main>
          <div className="h-screen">
            <Intro />
          </div>
         
          {/* 
          <div className="h-screen">
            <Whatsinitforyou />
          </div>
          <div className="h-screen">
            <ApplicationProcess />
          </div>
          <div class="h-[100vh]">
            <MtoAbout />
          </div> */}
          
        </main>
      )}
    </>
  );
};

export default Index;
