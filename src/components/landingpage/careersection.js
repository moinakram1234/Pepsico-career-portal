import React, { useState, useEffect, useRef } from "react";

import "react-quill/dist/quill.bubble.css";
import { fetchJobPosts } from "@/server_requests/client_requests";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Chatbot from "@/components/chatbot";
import { isTokenExpired } from "@/components/tokenUtils";

import HeroPageImage from "./Heropage";
import { BsFillQuestionSquareFill } from "react-icons/bs";

// import Slider from "react-slick";
// import Image from "next/image";
import Typewriter from "typewriter-effect";

const CareerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobPosts_M, setJobPosts_M] = useState(false);
  const [jobPosts, setJobPosts] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);
  const darkMode = useSelector((state) => state.darkMode);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  const { data: session } = useSession();
  const router = useRouter();
  const [usertoken, setUsertoken] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);

  const isMobile = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth <= 768; // Adjust the breakpoint as needed
      setCurrentPage(0); // Reset current page on window resize
    };
    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const openChatbotModal = () => {
    setIsChatbotModalOpen((prevState) => !prevState);
  };

  const closeChatbotModal = () => {
    setIsChatbotModalOpen(false);
  };

  const handleApplyNow = (id) => {
    // Add your logic for handling the "Apply Now" button click
    router.push(`/applyapplication?postid=${id}`);
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // setUsertoken(token);

    // //if token expire
    // if (!session) {
    //   if (!token) {
    //     router.push("/");
    //   }
    //   if (isTokenExpired(token)) {
    //     localStorage.removeItem("token");
    //     router.push("/");
    //   }
    // }

    const fetchData = async () => {
      const data = await fetchJobPosts();
      const filteredData = data.filter((jobPost) => jobPost.enable === true);

      setJobPosts(filteredData);
      setJobPosts_M(filteredData);
      setExpandedDescriptions(Array(data.length).fill(false));
    };

    fetchData();
  }, [usertoken, session]);
  // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  };

  const handleInputChange = (e) => {
    // Update the search query and fetch suggestions based on the input value
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  // const imageArray = [
  //   { src: "/image1.jpg", alt: "Image 1", width: 500, height: 300 },
  //   { src: "/image2.jpg", alt: "Image 2", width: 500, height: 300 },
  //   { src: "/image3.jpg", alt: "Image 3", width: 500, height: 300 },
  //   { src: "/image4.jpg", alt: "Image 4", width: 500, height: 300 },
  //   { src: "/image5.jpg", alt: "Image 5", width: 500, height: 300 },
  //   // Add more image data as needed
  // ];
  const handleSearch = () => {
    // Add your logic for handling the search button click
    // console.log(searchQuery);
    if (searchQuery) {
      router.push(`/jobs?tag=${searchQuery}`);
    }
  };
  return (
    <div>
      {/* {(session || usertoken) && ( */}
      { (
        <div>
          <div style={{}} className={`  w-full ${darkMode ? "" : "bg-white"}`}>
            <div className=" ">
              {/* <ImageGallery /> */}
              <HeroPageImage />
            </div>
          </div>
          <div
            className={` absolute top-[100%]  z-10 inset-0 flex flex-col justify-center items-center `}
          >
            <div
              className={`border rounded-2xl lg:w-[60%] p-2 items-center text-center ${
                darkMode ? "bg-black" : "bg-white"
              }`}
            >
              <div
                className={`text-3xl  lg:text-5xl flex  justify-center h-full items-center  ${
                  darkMode ? "text-white" : "text-black"
                } font-signature rounded `}
              >
                <Typewriter
                  options={{
                    strings: ["Join the Team"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <h5
                className={`text-center text-sm lg:text-lg sm:w-3/4 md:w-2/2 lg:w-2/3 xl:w-2/4 mx-auto ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
              
              </h5>

              <br></br>
              <br></br>
              <div className="flex items-center  h-10 lg:w-full lg:h-14 justify-center ">
              
              </div>
              {suggestions.length > 0 && (
                <ul
                  className={`suggestions-list bg-white mr-32 rounded-b-lg pl-3 pt-2 space-y-2 w-[30.1%] `}
                >
                  {suggestions.map((suggestion, index) => (
                    <li
                      className="hover:bg-gray-100 cursor-pointer"
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={`fixed bottom-4  lg:w-[35%]  right-4 mr-5 z-20 `}>
        {isChatbotModalOpen && <Chatbot closechat={closeChatbotModal} />}
        <div className="w-full  justify-end flex ">
          <button
            className={`shadow-lg  justify-end flex bg-white rounded-lg p-2 `}
            onClick={openChatbotModal}
          >
            <BsFillQuestionSquareFill size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
