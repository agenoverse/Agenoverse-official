import { Link } from "react-router-dom";
import { useBlogs } from "../../../hooks";

function BlogBanner() {
  const { blogs, loading, error } = useBlogs();

  // Get the latest blog
  const latestBlog =
    blogs.length > 0
      ? blogs.reduce((latest, current) => {
          return new Date(current.createdAt) > new Date(latest.createdAt)
            ? current
            : latest;
        })
      : null;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="text-red-500 text-center">
          <p>
            Error loading latest blog:{" "}
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

  if (!latestBlog) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="text-gray-500 text-center">
          <p>No blogs available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-4xl font-extrabold uppercase dark:text-stone-200 text-center mb-8">
        Latest Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-900 shadow-md p-4 border border-gray-200 dark:border-gray-700">
        <img
          src={
            latestBlog.coverImage ||
            "https://via.placeholder.com/600x400?text=Blog+Cover"
          }
          className="object-cover rounded-2xl md:rounded-l-2xl md:rounded-r-none w-full h-48 md:h-auto"
          alt={latestBlog.title}
        />
        <div className="flex flex-col justify-center md:p-4 md:space-y-5">
          <div className="flex justify-between">
            <span className="font-semibold leading-6 text-indigo-500 dark:text-indigo-400">
              {latestBlog.tags.length > 0 ? latestBlog.tags[0] : "Blog"}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              {new Date(latestBlog.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="md:space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {latestBlog.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              {latestBlog.content
                ? latestBlog.content.slice(0, 200) + "..."
                : "Read this exciting blog post..."}
            </p>
            <Link to={`/blogs/${latestBlog.slug}`}>
              <button className="mt-auto px-4 py-2 w-full cursor-pointer sm:w-48 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogBanner;
