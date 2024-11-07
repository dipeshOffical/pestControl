
import { Link } from 'react-router-dom';
import BookNowImage from '../../assets/bookNowImage.png'

const BookNowSection = () => {
  return (
    <div className="relative bg-primary   overflow-hidden">
      {/* Background pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
          {/* Left Content */}
          <div className="pt-16 pb-20 lg:pt-20 lg:pb-28 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Transform Your Space Today!
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
              Schedule Your Service With
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 leading-tight mb-8">
              SafeNest
            </h2>
            
            <p className="text-blue-100 text-base lg:text-lg mb-8 max-w-lg">
              Ready for a cleaner, healthier, and pest-free environment? Let's 
              make it happen! Whether you need pest control, deep cleaning, or 
              a complete service package, we'll work around your schedule. 
              Let's create a space you'll love coming back to!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to={'/booking'}>
                <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg transition-colors duration-200">
                  Book Service Now
                </button>
              
              </Link>
              <Link to={'/about'}>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-200">
                  Know About Us
                </button>
              
              </Link>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">

            <img 
              src={BookNowImage} 
              alt="Cleaning professional" 
              className="w-full   rounded-bl-3xl"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default BookNowSection;