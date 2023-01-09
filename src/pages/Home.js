import React from "react";
// import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import { useState } from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFive,
} from "../components/Info/Data";
import Footer from "../components/Footer/Footer";
import Channels from "../components/Services/Channels";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Channels />
      <Info {...homeObjFive} />
      <Footer />
    </>
  );
};

export default Home;
