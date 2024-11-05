
import { Star } from 'lucide-react';
export const TestimonialCard = ({ image, name, role, review, rating }) => (
    <div className={`
      bg-white p-8 rounded-lg shadow-sm border border-gray-100 
      flex flex-col items-center text-center
      transition-colors duration-300
      swiper-slide-active:bg-yellow-50
    `}>
      <img 
        src={image} 
        alt={name} 
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <p className="text-gray-700 mb-4 leading-relaxed">{review}</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-200 fill-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );