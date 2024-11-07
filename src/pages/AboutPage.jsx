import BackgroundImage from "../components/BackgroundImage"
import Mission from "../layouts/AboutPage/Mission"
import Teams from "../layouts/AboutPage/Teams"
import WhatWeStandFor from "../layouts/AboutPage/WhatWeStandFor"
import BookNowSection from "../layouts/HomePage/BookNowSection"
import TestimonialSection from "../layouts/HomePage/TestimonialSection"
import WhyChoose from "../layouts/HomePage/WhyChoose."

function AboutPage() {
    return (
        <div>
            <BackgroundImage text={'About Us'} />
            <Mission/>
            <WhyChoose/>
            <WhatWeStandFor/>
            <Teams/>
            <BookNowSection/>
            <TestimonialSection/>

        </div>
    )
}

export default AboutPage