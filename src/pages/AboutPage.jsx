import BackgroundImage from "../components/BackgroundImage"
import Teams from "../layouts/AboutPage/Teams"
import BookNowSection from "../layouts/HomePage/BookNowSection"
import TestimonialSection from "../layouts/HomePage/TestimonialSection"
import WhyChoose from "../layouts/HomePage/WhyChoose."

function AboutPage() {
    return (
        <div>
            <BackgroundImage text={'About Us'} />
            <WhyChoose/>
            <Teams/>
            <BookNowSection/>
            <TestimonialSection/>

        </div>
    )
}

export default AboutPage