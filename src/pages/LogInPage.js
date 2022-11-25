import React from "react";
import LogIn from "../components/LogIn/LogIn";
import Navbar from "../components/Navbar/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const LogInPage = () => {
  return (
    <div>
      <ScrollToTop />
      {/* <Navbar /> */}
      <LogIn />
    </div>
  );
};

export default LogInPage;
