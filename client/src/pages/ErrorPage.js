import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import "./ErrorPage.css";

export default function () {
  return (
    <>
      <NavBar />
      <div className="error-container">
        <div className="error-wrapper"></div>
      </div>
      <Footer />
    </>
  );
}
