import { useSelector } from "react-redux";
import Navbar from "@/pages/navbar";
const BaseLayout = ({ children }) => {
  // State to manage dark/light mode
  const darkMode = useSelector((state) => state.darkMode);

  // Effect to set the mode based on local storage or other preferences

  //

  return (
    <div
      className={`flex overflow-y-hidden overflow-x-hidden min-h-screen ${
        darkMode ? "bg-[#292929]" : "bg-white"
      }`}
    >
      <Navbar />
      <main className=" w-full">{children}</main>
    </div>
  );
};

export default BaseLayout;
