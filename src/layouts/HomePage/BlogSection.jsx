import { BlogCard } from "../../components/BlogCard";
import {blogPosts} from '../../utils/static-data'
const BlogSection = () => {
 
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className=" lg:flex justify-between gap-[10rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Stay Updated With Our Tips & Service News!
        </h2>
        <div >
        <div className="mb-4">Our Blog</div>
        <p className="text-gray-600 mb-12">
          Stay informed with our latest cleaning tips, service updates, expert advice on maintaining an immaculate home
        </p>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;