import React, { useState } from "react";
import "../Styles/Heading.scss";
import logo from "../Assets/logo.png";
import { FiShare } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import JobPosts from "./JobPosts";
import Footer from "./Footer";
const Heading = () => {
  const [icon, setIcon] = useState(false);
  const handleTheme = () => {
    setIcon((icon) => !icon);
    document.body.classList.toggle("dark-theme-variables");
  };
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Career Link",
        text: "Your dream job is just a click away with Career Link",
        url: "/",
      });
      console.log("Data was shared successfully");
    } catch (err) {
      console.log("Sharing failed", err);
    }
  };
  return (
    <main className="full-cointainer">
      <div className="description">
        <div className="top-buttons">
          <button onClick={handleTheme}>
            {icon ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
          <button onClick={handleShare}>
            <FiShare />
          </button>
        </div>
        <div className="about">
          <div className="logo">
            <img src={logo} alt=""></img>
          </div>
          <div className="heading">
            <h1>career link | jobs update</h1>
          </div>
          <div className="intro">
            <p>
              Empower your career journey with career link. Our platform
              connects students with top employers and offers a user-friendly
              interface, wide range of job opportunities, and career resources.
              Find your dream job now with career link.
            </p>
          </div>
          <div className="links">
            <a
              href="https://www.instagram.com/linkyourcareer/"
              target={"__blank"}
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
      <JobPosts />
      <Footer />
    </main>
  );
};

export default Heading;
