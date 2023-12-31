import React, { useState, useEffect } from "react";

import {
  Emailicon,
  PersonNaneicon,
  ViewApp,
  Contacticon,
  HomeAddress,
  Degreeicon,
  Pdficon,
  Departmenticon,
} from "@/assets/CustomIcons";
import BaseLayout from "@/admincomponents/BaseLayout";
import {
  deleteData_application,
  fetchData_application,
} from "@/server_requests/client_requests";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
const ViewallApplications = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData_application();
        setApplications(data);
      } catch (error) {
        // Handle the error appropriately
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);
  const deleteApplication = async (applicationId, path) => {
    await deleteData_application(applicationId, path);
    // After deletion, refresh the list of applications
    const updatedApplications = applications.filter(
      (app) => app.id !== applicationId
    );
    setApplications(updatedApplications);
  };
  return (
    <BaseLayout>
      <div
        className="flex flex-wrap ml-5 overflow-y-auto "
        style={{ maxHeight: "90vh" }}
      >
        {applications.map((data, index) => (
          <div
            style={{ backgroundColor: "#f3f4f6" }}
            key={index}
            className="m-2 h-72 w-2/5  rounded shadow-sm shadow-blue-200 overflow-hidden items-center"
          >
            <div className="text-right m-5">
              <button
                onClick={() => deleteApplication(data.id, data.cv)}
                className="text-red-500  hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
            <div className="ml-5 -mt-6 overflow-hidden flex hover:bg-white">
              <i>
                {" "}
                <PersonNaneicon />
              </i>
              <h2 className="ml-3">{data.fullName}</h2>
            </div>

            <div className="ml-5 pt-2 hover:bg-white flex">
              <i>
                {" "}
                <Contacticon />
              </i>
              <span className="ml-3">{data.phone}</span>
            </div>
            <div className="ml-5 pt-2 hover:bg-white flex">
              <i>
                {" "}
                <Emailicon />
              </i>
              <span className="ml-3">{data.email}</span>
            </div>
            <div className="ml-5 pt-2 hover:bg-white flex">
              <i>
                {" "}
                <HomeAddress />
              </i>
              <span className="ml-3">{data.address}</span>
            </div>

            <div className="ml-5 pt-2 flex hover:bg-white">
              <i>
                <Degreeicon />
              </i>
              <span className="ml-3">{data.qualification}</span>
            </div>

            <div className="ml-5 pt-2 flex hover:bg-white">
              <i>
                <Departmenticon />
              </i>
              <span className="ml-3">{data.selectedDepartment} </span>
            </div>
            <div className="ml-5 pt-2 flex hover:bg-white">
              <i>
                <Pdficon />
              </i>
              <span className="ml-3 cursor-pointer text-blue-500">
                <Link href={`${data.cv}`} passHref>
                  Download CV
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </BaseLayout>
  );
};

export default ViewallApplications;
