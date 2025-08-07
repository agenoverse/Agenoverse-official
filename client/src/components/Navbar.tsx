import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LucideSun,
  LucideMoon,
} from "lucide-react";
import ThemeToggleButton from "./ui/theme-toggle-button";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("");
  const [transitioning, setTransitioning] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  // Helper to check if a link is active
  const isActive = (to: string) => {
    // For root path
    if (to === "/") return pathname === "/";
    // For other paths, check if pathname starts with to
    return pathname.startsWith(to);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const handleThemeToggle = (newTheme: string) => {
  //   setTransitioning(true);
  //   setTimeout(() => {
  //     setTheme(newTheme);
  //     setTransitioning(false);
  //   }, 300);
  // };

  return (
    <nav
      className={`bg-white dark:bg-zinc-800 dark:text-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50 `}
    >
      {/* Mobile: Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 mx-auto md:mx-0">
        Agenoverse
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-6 items-center">
        <li>
          <Link
            to="/"
            className={`hover:text-blue-600 ${
              isActive("/") ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`hover:text-blue-600 ${
              isActive("/services") ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`hover:text-blue-600 ${
              isActive("/projects") ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={`hover:text-blue-600 ${
              isActive("/events") ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className={`hover:text-blue-600 ${
              isActive("/blogs") ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="/agenoversity"
            className={`hover:text-blue-600 ${
              isActive("/agenoversity") ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Agenoversity
          </Link>
        </li>

        {/* About dropdown */}
        <li className="relative">
          <button
            onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            className={`flex items-center gap-1 hover:text-blue-600 hover:cursor-pointer ${
              isActive("/about-us") ||
              isActive("/our-journey") ||
              isActive("/our-team")
                ? "text-blue-700 font-semibold"
                : ""
            }`}
          >
            About{" "}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                aboutDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {aboutDropdownOpen && (
            <ul
              className="absolute top-8 right-0 bg-white dark:bg-zinc-800 rounded shadow-md w-40 py-2 z-10"
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <li>
                <Link
                  to="/about-us"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:text-zinc-800 ${
                    isActive("/about-us") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-journey"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:text-zinc-800 ${
                    isActive("/our-journey") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Our Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/our-team"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:text-zinc-800 ${
                    isActive("/our-team") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Our Team
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* dark mode */}
        <li className="relative w-12 h-12 overflow-hidden">
          <div
            className="absolute inset-0 transition-all duration-300 ease-in-out transform"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? "translateY(20px)" : "translateY(0px)",
            }}
          >
            {/* {theme === "dark" ? (
              <button
                onClick={() => handleThemeToggle("")}
                className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
              >
                <LucideSun />
              </button>
            ) : (
              <button
                onClick={() => handleThemeToggle("dark")}
                className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
              >
                <LucideMoon />
              </button>
            )} */}
          <ThemeToggleButton />
          </div>

        </li>
      </ul>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="bg-white dark:bg-zinc-800 dark:text-white w-64 h-full p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-blue-600">Menu</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="space-y-4">
              <li>
                <Link
                  onClick={() => setSidebarOpen(false)}
                  to="/"
                  className={`block hover:text-blue-600 border-b border-gray-400/50 ${
                    isActive("/") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSidebarOpen(false)}
                  to="/services"
                  className={`block hover:text-blue-600 border-b border-gray-400/50 ${
                    isActive("/services") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSidebarOpen(false)}
                  to="/projects"
                  className={`block hover:text-blue-600 border-b border-gray-400/50 ${
                    isActive("/projects") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSidebarOpen(false)}
                  to="/events"
                  className={`block hover:text-blue-600 border-b border-gray-400/50 ${
                    isActive("/events") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSidebarOpen(false)}
                  to="/blogs"
                  className={`block hover:text-blue-600 border-b border-gray-400/50 ${
                    isActive("/blogs") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSidebarOpen(false)}
                  to="/agenoversity"
                  className={`block hover:text-blue-600 border-b border-gray-400/50 ${
                    isActive("/agenoversity") ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  Agenoversity
                </Link>
              </li>
              {/* About dropdown */}
              <li className="relative border-b border-gray-400/50">
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`flex items-center gap-1 hover:text-blue-600 ${
                    isActive("/about-us") ||
                    isActive("/our-journey") ||
                    isActive("/our-team")
                      ? "text-blue-700 font-semibold"
                      : ""
                  }`}
                >
                  About{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      aboutDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {aboutDropdownOpen && (
                  <ul className=" w-40 py-2 z-10">
                    <li>
                      <Link
                        onClick={() => setSidebarOpen(false)}
                        to="/about-us"
                        className={`flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100 ${
                          isActive("/about-us") ? "text-blue-700 font-semibold" : ""
                        }`}
                      >
                        <ChevronRight size={16} />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setSidebarOpen(false)}
                        to="/our-journey"
                        className={`flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100 ${
                          isActive("/our-journey") ? "text-blue-700 font-semibold" : ""
                        }`}
                      >
                        <ChevronRight size={16} />
                        Our Journey
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setSidebarOpen(false)}
                        to="/our-team"
                        className={`flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100 ${
                          isActive("/our-team") ? "text-blue-700 font-semibold" : ""
                        }`}
                      >
                        <ChevronRight size={16} />
                        Our Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="relative w-12 h-12 overflow-hidden md:hidden">
        <div
          className="absolute inset-0 transition-all duration-300 ease-in-out transform"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateY(20px)" : "translateY(0px)",
          }}
        >
          {/* {theme === "dark" ? (
            <button
              onClick={() => handleThemeToggle("")}
              className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
            >
              <LucideSun />
            </button>
          ) : (
            <button
              onClick={() => handleThemeToggle("dark")}
              className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
            >
              <LucideMoon />
            </button> 
          )}*/}
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
