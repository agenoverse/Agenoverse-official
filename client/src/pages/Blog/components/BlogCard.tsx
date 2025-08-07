import { Link } from "react-router-dom";
import { useBlogs } from "../../../hooks";

function BlogCard() {
  const { blogs, loading, error } = useBlogs();

  // Get the latest blogs (excluding the first one which is shown in BlogBanner)
  const latestBlogs = blogs
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(1, 4); // Skip first blog (shown in banner), take next 3

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
            Error loading blogs:{" "}
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

  if (latestBlogs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="text-gray-500 text-center">
          <p>No additional blogs available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 ">
      {latestBlogs.map((blog) => (
        <div
          key={blog._id}
          className="relative flex flex-col sm:flex-row xl:flex-col items-start bg-gray-200 dark:bg-gray-900 p-4 rounded-lg"
        >
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 dark:text-slate-100 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-indigo-500 dark:text-indigo-400">
                {blog.tags.length > 0 ? blog.tags[0] : blog.slug}
              </span>
              {blog.title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400 dark:prose-invert">
              <p>
                {blog.content
                  ? blog.content.slice(0, 80) + "..."
                  : "Read this exciting blog post..."}
              </p>
            </div>
            <Link to={`/blogs/${blog.slug}`}>
              <button className="group inline-flex items-center h-9 cursor-pointer rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white dark:focus:ring-slate-400 mt-6">
                Learn more
                <span className="sr-only">{blog.title} details</span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </button>
            </Link>
          </div>

          <img
            src={
              blog.coverImage ||
              "https://via.placeholder.com/400x300?text=Blog+Cover"
            }
            alt={blog.title}
            className="mb-6 shadow-md rounded-lg bg-slate-50 dark:bg-slate-800 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            width="1216"
            height="640"
          />
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
