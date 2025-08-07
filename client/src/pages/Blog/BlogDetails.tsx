// pages/blogs/BlogDetails.tsx
import { useParams } from "react-router-dom";
import { useBlogBySlug } from "../../hooks";
import MarkdownRenderer from "./components/MarkdownRenderer";
import TableOfContents, { extractHeadings } from "./components/TableOfContents";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blog, loading, error } = useBlogBySlug(slug || "");

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
          <p>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const headings = extractHeadings(blog.content || "");

  return (
    <div className="grid lg:grid-cols-12 gap-8 p-8 max-w-screen-xl">
      <div className="hidden lg:block col-span-1">
        {/* Empty space for layout */}
      </div>
      <div className="lg:col-span-8">
        <h1 className="text-4xl font-bold dark:text-stone-200">{blog.title}</h1>
        <p className="text-gray-600 mb-4 dark:text-gray-300">
          By {blog.author.name} • {new Date(blog.createdAt).toDateString()}
        </p>
        {blog.tags.length > 0 && (
          <div className="flex gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <img
          src={
            blog.coverImage ||
            "https://via.placeholder.com/800x400?text=Blog+Cover"
          }
          alt={blog.title}
          className="w-full mb-6 rounded"
        />
        {blog.content ? (
          <MarkdownRenderer content={blog.content} />
        ) : (
          <div className="text-gray-500 dark:text-gray-400">
            <p>Content is not available for this blog post.</p>
          </div>
        )}
      </div>
      <aside className="col-span-3 hidden lg:block">
        <TableOfContents headings={headings} />
      </aside>
    </div>
  );
};

export default BlogDetails;
