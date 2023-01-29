import React from "react";
import { FiShare } from "react-icons/fi";
import "../Styles/JobPosts.scss";

const JobPosts = () => {
  const jobs = [
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
    {
      name: "Siemens is Hiring",
      url: "https://myrekruiter.space/form/siemenshiring-2023-january6",
      id:9,
    },
    {
      name: "Google - Software Engineer",
      url: "https://unstop.com/job/software-engineer-google-cloud-google-587357?utm_source=Jobseekersarena-Instagram&utm_medium=Affiliates&utm_campaign=Google15012023",
      id:10,
    },
    {
      name: "IIT Madras - Internship Hiring",
      url: "https://rbcdsai.iitm.ac.in/",
      id:11,
    },
    {
      name: "OKCL Hiring",
      url: "https://http://okcl.org/",
      id:12,
    },
    {
      name: "Hexaware is Hiring",
      url: "https://myrekruiter.space/form/hexawarehiring-2023-december30",
      id:13,
    },
    {
      name: "Zycus - Software Engineer",
      url: "https://zycus.skillate.com/jobs/43113",
      id:14,
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
