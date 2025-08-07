interface HeroSectionProps{
  topLine:string;
  mainText:string;
  image:string;
}



const HeroSectionAlternate = ({topLine,mainText,image}:HeroSectionProps) => {
  return (
    <div>
      <main id="content">


      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center rounded-2xl bg-stone-200 dark:bg-gray-800 ">
        <div className="md:hidden relative h-80 md:h-120 bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <img className="absolute inset-0 size-full object-cover rounded-l-2xl" src={image} alt="Testimonials Image"/>
        </div>


        <div className="pt-10 md:p-10">
          <blockquote className="max-w-4xl mx-auto">
            <p className="mb-6 md:text-lg dark:text-gray-400 p-3">
              {topLine}
            </p>

            <p className="text-xl sm:text-2xl text-justify p-3 lg:leading-normal text-gray-800 dark:text-neutral-200">
               {mainText}
            </p>

          </blockquote>
        </div>

        <div className="hidden md:block relative h-80 md:h-120 bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <img className="absolute inset-0 size-full object-cover rounded-2xl md:rounded-r-2xl" src={image} alt="Testimonials Image"/>
        </div>
    </div>


  </main>
    </div>
);
};

export default HeroSectionAlternate;

      {/* <section className="text-center py-20 bg-gray-50">
        <span className="text-sm tracking-widest uppercase text-gray-500">
          Featured Work
        </span>
        <h2 className="text-4xl font-bold mt-2 text-gray-800">
          Our Work Speaks for Itself
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          From startups to enterprises, we've helped businesses transform ideas
          into reality. Explore our portfolio to see how we blend creativity,
          technology, and strategy to deliver results that matter.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition">
            View Projects
          </button>
          <button className="border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition">
            Let's Build Yours
          </button>
        </div>
      </section> */}