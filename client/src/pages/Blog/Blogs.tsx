import Banner from "../../components/Banner";
import AllBlogs from "./components/AllBlogs";
import BlogBanner from "./components/BlogBanner";
import BlogCard from "./components/BlogCard";

const Blogs = () => {
  return (
    <div className="space-y-10">
      <Banner
        title="Blogs"
        description="Explore our curated collection of insightful articles, tutorials, and updates. Stay informed with the latest trends, tips, and stories from our expert contributors in the tech industry."
        image="/services.png"
        subtitle="Stay updated with our latest blogs"
      />
      <div className="col-span-3 row-span-1">
        <BlogBanner />
      </div>
      <BlogCard />
      <AllBlogs />
    </div>
  );
};

export default Blogs;
