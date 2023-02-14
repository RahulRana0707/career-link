import React from "react";
import { FiShare } from "react-icons/fi";
import "../Styles/JobPosts.scss";

const JobPosts = () => {
  const jobs = [
    {
      name: "Paralleln Wireless is Hiring",
      url: "https://jobs.lever.co/parallelwireless/d5392784-452b-4256-a1a1-80295828fd1a",
      id:13,
    },
    {
      name: "Vestas Is Hiring",
      url: "https://careers.vestas.com/job/Chennai-Trainee-TN/901124301/",
      id:14,
    },
    {
      name: "Genpact Is Hiring",
      url: "https://genpact.taleo.net/careersection/sgy_external_career_section/jobdetail.ftl?job=COR025315&tz=GMT-06%3A00&tzname=America%2FChicago&src=DS-11025",
      id:15,
    },
    {
      name: "Anthology - Software Developer",
      url: "https://careers.anthology.com/jobs/12019499-associate-software-developer",
      id:1,
    },
    {
      name: "NatWest Hiring Java Intern",
      url: "https://jobs.natwestgroup.com/jobs/11936206-natwest-accelerate-java-intern-6-months",
      id:2,
    },
    {
      name: "Finastra - Associate Engineer",
      url: "https://careers.finastra.com/jobs/7948",
      id:3,
    },
    {
      name: "Infosys - System Engineer",
      url: "https://career.infosys.com/jobdesc?jobReferenceCode=PROGEN-External-144219&source=44003",
      id:4,
    },
    {
      name: "Motorola - Software Engineer",
      url: "https://motorolasolutions.wd5.myworkdayjobs.com/en-US/Careers/job/Bangalore-India/Software-Engineer_R35498?q=Software%20Engineer",
      id:5,
    },
    {
      name: "ASI - Software Intern",
      url: "https://advancedstructures.in/careers/",
      id:6,
    },
    {
      name: "CarDekho Is Hiring",
      url: "https://jobs.klimb.io/girnarsoft/63d3e20620df3c9805f506cf?source=careers",
      id:7,
    },
    {
      name: "Relaince is Hiring",
      url: "https://rcareers.ril.com/sap/bc/ui5_ui5/sap/ZJDESC_ERECAPP/index.html?sap-ui-language=EN&sap-ui-appcache=false&sap-theme=ZEREC_BASE@/sap/public/bc/themes/~client-449&tid=DJ&pid=AUxBQkNDQEVC",
      id:8,
    },
    {
      name: "Genpact Is Hiring",
      url: "https://genpact.taleo.net/careersection/sgy_external_career_section/jobdetail.ftl?job=BFS025950&tz=GMT-06%3A00&tzname=America%2FChicago&src=DS-11025",
      id:9,
    },
    {
      name: "Loreal is Hiring",
      url: "https://careers.loreal.com/en_US/jobs/JobDetail/141329",
      id:10,
    },
    {
      name: "Newgen Software is Hiring",
      url: "https://www.firstnaukri.com/job-listings-data-scientist-fresher-opening-newgen-software-technologies-newgen-noida-0-to-2-years-230123911033?sid=16751703262431350_2&jobPosition=20&pageNo=2",
      id:11,
    },
    {
      name: "Apple Is Hiring",
      url: "https://jobs.apple.com/en-in/details/200314122/in-technical-specialist",
      id:12,
    },
  ];
  return (
    <div className="jobs-post">
      {jobs.map((i) => {
        return (
          <a href={i.url} target={"__blank"} key={i.id}>
            <h1>{i.name}</h1>
            <b><FiShare></FiShare></b>
          </a>
        );
      })}
    </div>
  );
};

export default JobPosts;
