import Banner from "../../components/Banner";
import ServicePng from "../../../public/services.png";
import WebApplicaion from "./components/WebApplicaion";
import DesktopApplication from "./components/DesktopApplication";
import HeroSection from "../../components/HeroSection";
import HeroSectionAlternate from "../../components/HeroSectionAlternate";
import AgenticApplication from "./components/AgenticApplication";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <>
      <Banner
        title={"Our Projects"}
        subtitle={" Our Work Speaks for Itself"}
        description={
          "From startups to enterprises, we've helped businesses transform ideas into reality. Explore our portfolio to see how we blend creativity, technology, and strategy to deliver results that matter."
        }
        image={ServicePng}
      />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 ">
        <WebApplicaion />
        <HeroSection
          topLine="Turning Ideas Into Impactful Digital Solutions"
          mainText="We don't just build projects - we build partnerships. Our approach combines learning, teaching, and innovation to create solutions that help your business grow and stand out in a fast-changing world."
          image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <DesktopApplication />
        <HeroSectionAlternate
          topLine="Turning Ideas Into Impactful Digital Solutions"
          mainText="We don't just build projects - we build partnerships. Our approach combines learning, teaching, and innovation to create solutions that help your business grow and stand out in a fast-changing world."
          image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <AgenticApplication />
        {/* <WhyChooseUs/> */}
        {/* WEBAPPLICTAION  */}
        {/* MOBILE APPLICATIOON  */}
        {/* aGENTIC APPLICATIOON  */}
        {/* Chatbot application */}
      </div>
    </>
  );
};

export default Projects;
