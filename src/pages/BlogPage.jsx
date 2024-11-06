
import BackgroundImage from '../components/BackgroundImage'
import { blogPosts } from '../utils/static-data'
import { BlogCard } from '../components/BlogCard'

function BlogPage() {
  return (
    <div>
        <BackgroundImage text={'Blog'}/>
        <div className="max-w-7xl mx-auto px-2 lg:px-8 py-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPage