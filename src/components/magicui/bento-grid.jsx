import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FaBuilding,
  FaLevelUpAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const BentoGrid = ({ children, className }) => {
  return <div className={cn("", className)}>{children}</div>;
};

const BentoCard = ({
  index,
  className,
  background,
  Icon,
  department,
  href,
  jobType,
  jobLocation,
  experience,
  experienceLevel,
  submissionDeadline,
  cta,
}) => (
  <div className="">
    <div
      key={index}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        " [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu text-black dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div className="h-24">{background} </div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left text-black transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl text-black font-semibold dark:text-neutral-300"></h3>
        <div>
    <p className="max-w-lg text-black">{department}</p>
    <p className="max-w-lg text-black">
      <FaLevelUpAlt className="inline mr-2" title="Experience Level" />
      {experienceLevel}
    </p>
    <p className="max-w-lg text-black">
      <FaBriefcase className="inline mr-2" title="Job Type" />
      {jobType}
    </p>
    <p className="max-w-lg text-black">
      <FontAwesomeIcon icon={faHistory} className="inline mr-2" title="Experience" />
      {experience[0]} - {experience[1]}
    </p>
    {/* <p className="max-w-lg text-black">{jobLocation}</p> */}
    <p className="max-w-lg text-black">
      <FaCalendarAlt className="inline mr-2" title="Submission Deadline" />
      {submissionDeadline}
    </p>
  </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto"
        >
          <a href={href} className="border text-black">
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  </div>
);

export { BentoCard, BentoGrid };
