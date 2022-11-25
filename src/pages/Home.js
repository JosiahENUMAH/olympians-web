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
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

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
      <Services />
      <Info {...homeObjFive} />
      <Footer />
    </>
  );
};

export default Home;
