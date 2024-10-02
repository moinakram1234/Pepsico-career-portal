import { useEffect, useRef } from "react";
import { MisImage } from "@/components/images";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
const MISsection = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const videoRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle play failure (due to autoplay restrictions)
        console.log("Autoplay failed: ", error);
      });
    }
  }, []);
  const router = useRouter();

  const navigateToNextPage = () => {
    router.push("/jobs");
  };
  return (
    <div className="w-full mt-10  h-[100vh] bg-[#ffffff]">
      <div className=" lg:flex h-full ">
      <div className="flex-1 rounded-lg p-2 h-full" data-aos="zoom-in">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="h-full w-full rounded-lg"
      >
        <source src="/images/FrontendCareer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

        <div
          className={`mis-description flex-1 mt-10 lg:mt-20 space-y-10`}
          data-aos="fade-up"
        >
          <span
            className="text-xl lg:text-3xl  font-bold "
            style={{ color: darkMode ? "black" : "black" }}
          >
            EXPLORE CAREER OPPORTUNITIES AT HAIDRI BEVERAGES
          </span>
          <div>
            <div className="" style={{ color: darkMode ? "black" : "black" }}>
              Discover exciting career prospects at Haidri Beverages. Join our
              vibrant team and contribute to a company dedicated to crafting
              top-tier beverages that captivate consumers worldwide.
              <br />
              <br />
              Apply today and embark on a fulfilling career journey with Haidri
              Beverages!
            </div>
          </div>

          <br />
          <button
            className="view-jobs-button rounded-md"
            style={{
              backgroundColor: "#4D5154",
              color: "white",
              padding: "5px 10px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
            }}
            onClick={navigateToNextPage}
          >
            View Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default MISsection;
