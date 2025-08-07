interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const Banner = ({ title, subtitle, description, image }: BannerProps) => {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 h-fit md:h-80 place-items-center bg-stone-200 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-stone-200">
        {title}
      </h1>
      <div className="grid md:grid-cols-2  gap-6 md:gap-8 lg:gap-12">
        <div className="">
          <span className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-300">
            Featured Work
          </span>
          <h2 className="text-4xl font-bold mt-2  text-gray-800 dark:text-stone-200">
            {subtitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-justify md:text-left">
            {description}
          </p>
        </div>
        <div className="flex justify-center relative">
          <img
            src={image}
            alt=""
            className="object-contain h-60 md:absolute -top-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

// interface BannerProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
// }

// const Banner = ({ title, subtitle, description, image }: BannerProps) => {
//   return (
//     <section className="bg-stone-200 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Title */}
//         <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-stone-200 text-center mb-6">
//           {title}
//         </h1>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           {/* Text Side */}
//           <div>
//             <span className="text-xs sm:text-sm tracking-widest uppercase text-gray-500 dark:text-gray-300">
//               Featured Work
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-gray-800 dark:text-stone-200">
//               {subtitle}
//             </h2>
//             <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
//               {description}
//             </p>
//           </div>

//           {/* Image Side */}
//           <div className="flex justify-center md:justify-end">
//             <img
//               src={image}
//               alt={subtitle}
//               className="w-full sm:w-3/4 md:w-full max-w-md h-48 sm:h-64 object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
