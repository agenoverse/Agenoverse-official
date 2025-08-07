import { useProjects } from "@/hooks";
import { useState } from "react";

// type TAgenticApplication = {
//   title: string;
//   description: string;
//   image: string;
// };

// const agenticAiDevelopmentData: TAgenticApplication[] = [
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello World",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Hello Dunya",
//     description:
//       " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const AgenticApplication = () => {
  const [showAll, setShowAll] = useState(false);
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p>
            Error loading projects:{" "}
            {typeof error === "string"
              ? error
              : error?.message || String(error)}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  const agenticAiDevelopmentData = projects.filter(
    (project) => project.category === "AI/ML"
  );
  if (agenticAiDevelopmentData.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500 text-center">
          <p>No projects available yet.</p>
        </div>
      </div>
    );
  }

  const visibleCards = showAll
    ? agenticAiDevelopmentData
    : agenticAiDevelopmentData.slice(0, 6);

  return (
    <div
      className="flex flex-col items-center gap-8 scroll-mt-28"
      id="agentic-ai"
    >
      <h1 className="text-4xl text-centern font-extrabold uppercase dark:text-stone-200">
        Agentic Application Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCards.map((data, index) => (
          <div
            key={index}
            className="relative w-full  isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm m-auto"
          >
            <img
              src={data.imageUrl}
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              {data.title}
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {data.description}
            </div>
          </div>
        ))}
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

export default AgenticApplication;
