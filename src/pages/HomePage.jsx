import BlogSection from "../layouts/HomePage/BlogSection"
import BookNowSection from "../layouts/HomePage/BookNowSection"
import HeroSection from "../layouts/HomePage/HeroSection"
import ServiceSection from "../layouts/HomePage/ServiceSection"
import StatsBar from "../layouts/HomePage/StatisticsBar"
import TestimonialSection from "../layouts/HomePage/TestimonialSection"
import WhyChoose from "../layouts/HomePage/WhyChoose."

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <WhyChoose/>
      <ServiceSection/>
      <BookNowSection/>
      <TestimonialSection/>
      <StatsBar/>
      <BlogSection/>
    </div>
  )
}

export default HomePage