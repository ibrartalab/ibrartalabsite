import React from "react";
import { IoDiamondSharp } from "react-icons/io5";

function Work() {
  return (
    <>
      <div className="text-left lg:ps-32 ">
        <h3 className="text-2xl font-bold mt-10">Experience</h3>
      </div>
      <div className="flex justify-evenly lg:">
        <Experience
          imgName={"DiceAnalytics"}
          companyName={"Dice Analytics"}
          time={"(1 year 4 months)"}
        >
          <CircleIcon />
          <ExperienceList
            title={"Frontend Developer"}
            duration={"Full-time"}
            location={"Islamabad,Pakistan"}
            skills={"Html, CSS, Js"}
          />
          <CircleIcon />
          <ExperienceList
            title={"Business Intelligence Developer"}
            duration={"Full-time"}
            location={"Islamabad,Pakistan"}
            skills={"Html, CSS, Js"}
          />
          <CircleIcon />
          <ExperienceList
            title={"Business Intelligence Developer"}
            duration={"Internship"}
            location={"Islamabad,Pakistan"}
            skills={"Html, CSS, Js"}
            className={"border-none"}
          />
        </Experience>

        <div className="flex lg:flex-col justify-between">
          <Experience
            imgName={"tata"}
            companyName={"Tata Group"}
            time={"(1 month)"}
          >
            <ExperienceList
              title={"Data Analyst"}
              duration={"Internship"}
              location={'Remote'}
              skills={"Microsoft Power BI and Microsoft Excel"}
              className={"border-none  lg:mt-4"}
             
            />
          </Experience>
          <Experience imgName={"pwc"} companyName={"PwC"} time={"(1 month)"}>
            <ExperienceList
              title={"BI Analyst"}
              duration={"Internship"}
              location={'Remote'}
              skills={"Microsoft Power BI and Microsoft Excel"}
              className={"border-none lg:mt-4"}
              
            />
          </Experience>
        </div>
      </div>
    </>
  );
}

//Experice for Each company
function Experience({ imgName, companyName, time, children }) {
  return (
    <div className="exp-wrapper text-left lg:mt-8 bg-white text-black rounded-3xl w-80 h-max">
      <div className="lg:w-max lg:h-20 flex  items-center lg:ps-4 ">
        <img
          src={`/src/assets/${imgName}.png`}
          alt="company"
          className="lg:w-14 lg:h-14"
        />
        <span className="text-lg font-semibold">
          {companyName} <span className="text-sm">{time}</span>
        </span>
      </div>
      {children}
    </div>
  );
}

// List of Roles for each company
function ExperienceList({
  title,
  duration,
  location,
  skills,
  className,
  nestedClass,
}) {
  return (
    <>
      <div
        className={`lg:w-44 border-l-2 border-gray-400 lg:h-40 lg:ml-4 relative ${className}`}
      >
        <div className="exp-list lg:w-max lg:h-40  m-auto lg:ps-4 absolute lg:-top-7 ">
          <div className={`text-md font-bold text-start  ${nestedClass}`}>
            {title}
          </div>
          <div className="text-left text-sm">{duration}</div>
          <div className="text-left text-sm">{location}</div>
          <div className="text-center flex justify-normal items-center gap-2 text-sm">
            <IoDiamondSharp className="lg:mt-4 text-slate-800" />
            <div className="lg:mt-4">{skills}</div>
          </div>
        </div>
      </div>
    </>
  );
}

//Circle icon from career break
function CircleIcon() {
  return (
    <div className=" round-circle w-3 h-3 rounded-full  lg:ml-3 lg:mb-2 lg:mt-2 "></div>
  );
}

export default Work;
