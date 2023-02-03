import React from "react";
import { FiShare } from "react-icons/fi";
import "../Styles/JobPosts.scss";

const JobPosts = () => {
  const jobs = [
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
    {
      name: "Micro Focus is hiring",
      url: "https://jobs.microfocus.com/global/en/job/7028743/Quality-Engineer",
      id:13,
    },
    {
      name: "KPMG is Hiring Analyst Technology",
      url: "https://ejgk.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/22000DY5",
      id:14,
    },
    {
      name: "Cisco is Hiring",
      url: "https://app.smartsheet.com/b/form/fe730bd197174dfc8645d454d026a0d8",
      id:15,
    },
    {
      name: "KPGM is Hiring",
      url: "https://myrekruiter.space/form/kpgmhiring-2023-january25",
      id:1,
    },
    {
      name: "Enterpret is Hiring",
      url: "https://myrekruiter.space/form/enterprethiring-2023-january25",
      id:2,
    },
    {
      name: "redBus is Hiring",
      url: "https://myrekruiter.space/form/redbushiring-2023-january25",
      id:3,
    },
    {
      name: "Citi - Jr Java Developer",
      url: "https://jobs9.com/jobs/junior-java-developer-9627871?utm_source=Insta_Jobseekersarena&utm_medium=Affiliate&utm_id=citi",
      id:4,
    },
    {
      name: "HPE - software engineer",
      url: "https://unstop.com/job/sw-engineer-systems-hewlett-packard-enterprise-595748?utm_source=Jobseekersarena-Instagram&utm_medium=Affiliates&utm_campaign=HPE27012023",
      id:5,
    },
    {
      name: "Nissan - Software Engineer",
      url: "https://unstop.com/job/software-engineer-nissan-motor-corporation-590508?utm_source=Jobseekersarena-Instagram&utm_medium=Affiliates&utm_campaign=Nissan26012023",
      id:6,
    },
    {
      name: "IBM - system engineer",
      url: "https://unstop.com/job/software-engineer-nissan-motor-corporation-590508?utm_source=Jobseekersarena-Instagram&utm_medium=Affiliates&utm_campaign=Nissan26012023",
      id:7,
    },
    {
      name: "Qualcomm is Hiring",
      url: "https://myrekruiter.space/form/qualcommhiring-2023-january7",
      id:8,
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
