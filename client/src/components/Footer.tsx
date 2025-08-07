import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-zinc-200 dark:border-zinc-600  dark:bg-zinc-800 dark:text-gray-400 space-y-6 md:space-y-12 py-12">
      <div className="grid md:grid-cols-12 mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="md:col-span-6 place-items-center mx-auto md:mx-0">
          <h1 className="text-blue-600 text-xl font-bold">Agenoverse</h1>
          <p className="w-3/4 text-sm sm:text-lg text-center sm:text-justify md:text-left">
            Agenoverse is a futuristic community where learners, innovators, and
            builders come together to explore the world of AI agents, generative
            intelligence, and breakthrough ideas. It's a universe where we learn
            together, build impactful solutions, and teach forward—empowering
            each member to become not just a user of AI, but a creator of it.
          </p>
        </div>
        <div className="md:col-span-2 space-y-3">
          <h2 className="dark:text-white font-medium ">Resources</h2>
          <ul className="md:space-y-3">
            <li className="hover:underline dark:hover:text-white">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="/events">Events</Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="/agenoversity">Agenoversity</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-3">
          <h2 className="dark:text-white font-medium ">Help & Support</h2>
          <ul className="md:space-y-3 ">
            <li className="hover:underline dark:hover:text-white">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="/hire-us">Hire us</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-3">
          <h2 className="dark:text-white font-medium ">Follow Us</h2>
          <ul className="md:space-y-3">
            <li className="hover:underline dark:hover:text-white">
              <Link to="https://www.facebook.com/profile.php?id=61574935032238">
                Facebook
              </Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="https://www.linkedin.com/company/agenoverse/about/">
                LinkedIn
              </Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="https://github.com/agenoverse">Github</Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="https://x.com/agenoverse">X(Twitter)</Link>
            </li>
            <li className="hover:underline dark:hover:text-white">
              <Link to="https://www.instagram.com/agenoverse.ai/">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-zinc-800 flex justify-center items-center">
        ©2025 - Agenoverse All rights reserved
      </div>
    </div>
  );
};

export default Footer;
