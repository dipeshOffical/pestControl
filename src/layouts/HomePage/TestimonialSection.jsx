
import { TestimonialCard } from "../../components/TestimonialCard";
import testimonialImage from '../../assets/testimonialImage.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const TestimonialSection = () => {
    const testimonials = [
      {
        image: testimonialImage,
        name: "Courtney Henry",
        role: "Nursing Assistant",
        review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        rating: 4
      },
      {
        image: testimonialImage,
        name: "Courtney Henry",
        role: "Nursing Assistant",
        review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        rating: 4
      },
      {
        image:testimonialImage,
        name: "Courtney Henry",
        role: "Nursing Assistant",
        review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        rating: 4
      },
      {
        image: testimonialImage,
        name: "Courtney Henry",
        role: "Nursing Assistant",
        review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        rating: 4
      }, {
        image:testimonialImage,
        name: "Courtney Henry",
        role: "Nursing Assistant",
        review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        rating: 4
      },
      // Add more testimonials as needed
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-yellow-500 text-sm font-medium uppercase tracking-wider mb-2">
            Happy Customers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>
  
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-500',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* <style jsx global>{`
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #CBD5E1;
            opacity: 1;
          }
          
          .swiper-pagination-bullet-active {
            background: #3B82F6;
            transform: scale(1.2);
          }
          
          .swiper-pagination {
            position: relative;
            margin-top: 2rem;
          }
        `}</style> */}
      </div>
    );
  };
  
  export default TestimonialSection;