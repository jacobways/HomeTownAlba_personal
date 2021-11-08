import React from "react";
import Map from "./Map";
import "./LandingPage_CSS/LandingPage.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import TopBtn from "../components/TopBtn.js";
import Feature from "../components/Feature.js";
import Service from "../components/Service";

function LandingPage() {
  return (
    <>
      <TopBtn />
      <NavBar />
      <div style={{ overflow: "hidden" }}>
        <Service />
        <Feature />
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
