

export const BlogCard = ({ image, date, title, excerpt }) => (
  <div className="flex flex-col bg-white rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
    <div className="relative h-48 sm:h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-3">{date}</p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      <button className="text-yellow-500 hover:text-yellow-600 font-medium inline-flex items-center group">
        Read More
        <svg 
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </button>
    </div>
  </div>
);
