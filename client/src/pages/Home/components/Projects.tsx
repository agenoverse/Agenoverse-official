import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="place-items-center">
      <h1 className="text-4xl font-bold text-center mb-[1em]">Our Projects</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
        <div className="h-96 w-72 lg:w-fit border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(14,1,41,0.87)] dark:to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full object-cover rounded-2xl"
            />
            <h1 className="text-[2em] font-medium">Web Apps</h1>
            <p className="text-[0.85em]">
              We also provide a comprehensive suite of web applications designed to enhance productivity and streamline workflows.
            </p>
          </div>

          <Link
            to={"/projects#web-app"}
            className="w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
          >
            <p>Explore</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="h-96 w-72 lg:w-fit border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(14,1,41,0.87)] dark:to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full object-cover rounded-2xl"
            />
            <h1 className="text-[2em] font-medium">Agentic AI</h1>
            <p className="text-[0.85em]">
              We also provide a comprehensive suite of AI tools designed to
              enhance productivity and streamline workflows.
            </p>
          </div>

          <Link
            to={"/projects#desktop-app"}
            className="w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
          >
            <p>Explore</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="h-96 w-72 lg:w-fit border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(14,1,41,0.87)] dark:to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full object-cover rounded-2xl"
            />
            <h1 className="text-[2em] font-medium">Agentic AI</h1>
            <p className="text-[0.85em]">
              We also provide a comprehensive suite of AI tools designed to
              enhance productivity and streamline workflows.
            </p>
          </div>

          <Link
            to={"/projects#agentic-ai"}
            className="w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
          >
            <p>Explpore</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="h-96 w-72 lg:w-fit border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(14,1,41,0.87)] dark:to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-around items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
          <h1 className="text-[2em] font-medium">Explore More</h1>
          <p className="text-[0.85em]">
            Discover a wide range of exciting projects by clicking the button
            below. Explore detailed case studies, innovative solutions, and
            creative work that showcase our expertise and passion for
            technology.
          </p>

          <Link
            to={"/projects"}
            className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
          >
            <p>Explore</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
