import HeroSection from "@/components/HeroSection";
import MainHerosection from "../../components/MainHerosection";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return(
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
    {/* Nesletter */}
    {/* future section */}
    {/* Social Proof content */}
    <MainHerosection/>
    <Projects/>
    <Banner/>

    <WhyChooseUs/>
  </div>
  );
};

export default Home;
