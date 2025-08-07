import { useProjects } from "@/hooks/useProjects";
import { useState } from "react";

// type TWebApplication = {
//   title: string;
//   description: string;
//   image: string;
// };

// const datas: TWebApplication[] = [
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const WebApplication = () => {
  const [showAll, setShowAll] = useState(false);

  const { projects, loading, error } = useProjects();

  const webApplicationsData = projects.filter(
    (project) => project.category === "Web Development"
  );

  const visibleCards = showAll
    ? webApplicationsData
    : webApplicationsData.slice(0, 6);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center text-gray-500">No projects available.</div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 scroll-mt-28" id="web-app">
      <h1 className="text-4xl text-center font-extrabold uppercase dark:text-stone-200">
        Web Application Projects
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {visibleCards.map((data, index) => {
          const isFaded = !showAll && index >= 4; // apply opacity only for index 4 and 5
          return (
            <div
              key={index}
              className={`flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 group transition duration-300 ${
                isFaded ? "opacity-0 h-0 overflow-hidden" : ""
              }`}
            >
              <img
                className=" object-contain w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={data.imageUrl}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <button
                  type="button"
                  className="text-white w-24 bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 dark:group-hover:bg-gray-800"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 px-6 py-2 rounded-md transition"
        >
          See More
        </button>
      )}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 px-6 py-2 rounded-md transition"
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default WebApplication;
