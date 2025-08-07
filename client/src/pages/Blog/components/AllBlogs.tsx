import { Link } from "react-router-dom";
import { useState } from "react";
import { useBlogs } from "../../../hooks";

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const { blogs, loading, error } = useBlogs();

  // Sort blogs by date (newest first)
  const sortedBlogs = blogs
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  // Calculate indexes
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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

  if (sortedBlogs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500 text-center">
          <p>No blogs available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl font-extrabold uppercase dark:text-stone-200">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 ">
        {currentBlogs.map((blog) => (
          <Link
            to={`/blogs/${blog.slug}`}
            className="w-full block"
            key={blog._id}
          >
            <div className="relative flex flex-col sm:flex-row xl:flex-col items-start bg-gray-200 dark:bg-gray-900 p-4 rounded-lg">
              <div className="order-1 sm:ml-6 xl:ml-0">
                <div className="flex justify-between">
                  <span className="font-semibold leading-6 text-indigo-500 dark:text-indigo-400">
                    {blog.tags.length > 0 ? blog.tags[0] : blog.slug}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mb-1 text-slate-900 dark:text-slate-100 font-semibold">
                  {blog.title}
                </h3>
                <p className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400 dark:prose-invert">
                  {blog.content
                    ? blog.content.slice(0, 80) + "..."
                    : "Read this exciting blog post..."}
                </p>

                <div className="flex items-center mt-4 space-x-4">
                  <img
                    src={
                      blog.author.photoUrl ||
                      "https://via.placeholder.com/40x40?text=Author"
                    }
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Written by {blog.author.name}
                    </p>
                  </div>
                </div>
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
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-indigo-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-800 transition-colors"
          >
            Previous
          </button>
          <span className="text-lg font-semibold flex items-center px-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-indigo-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-800 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
