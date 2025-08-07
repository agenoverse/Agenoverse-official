import { Code2, Contact2, PuzzleIcon, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen space-y-10">
      <h1 className="text-4xl text-center font-extrabold uppercase dark:text-stone-200">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
        {/* Developer Card */}
        <div className="block rounded-xl border border-gray-300 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex justify-center items-center text-black dark:text-white">
              <Code2 />
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-black dark:text-white">
            For Developers
          </h2>
          <p className="sm:mt-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Prototype ideas online, without depending on your local environment.
          </p>
        </div>

        {/* Content Creators */}
        <div className="block rounded-xl border border-gray-300 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex justify-center items-center text-black dark:text-white">
              <PuzzleIcon />
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-black dark:text-white">
            Content Creators
          </h2>
          <p className="sm:mt-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Deliver high-quality, engaging blogs, articles, and video tutorials
            to your audience.
          </p>
        </div>

        {/* Educators */}
        <div className="block rounded-xl border border-gray-300 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex justify-center items-center text-black dark:text-white">
              <Contact2 />
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-black dark:text-white">
            Educators Teaching PHP
          </h2>
          <p className="sm:mt-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Easily create and share coding assignments and projects with your
            students.
          </p>
        </div>

        {/* Open Source Maintainers */}
        <div className="block rounded-xl border border-gray-300 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex justify-center items-center text-black dark:text-white">
              <Wrench />
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-black dark:text-white">
            Open Source Maintainers
          </h2>
          <p className="sm:mt-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            For issue reproduction while letting users try your work without
            installing it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
