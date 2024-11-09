import Button from "../../components/Button"
import heroImage from '../../assets/heroImage.png'
import mice from '../../assets/mice.png'
import turnarrow from '../../assets/turnarrow.png'
import { Link } from "react-router-dom"
function HeroSection() {
    return (
        <div className="bg-primary min-h-[600px] relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between">
                {/* Left content */}
                <div className="max-w-xl lg:max-w-2xl z-10">
                    <div className="inline-block">
                        <span className="bg-red-primary text-white px-4 py-1.5 rounded-full text-sm font-medium">
                            Opal Pest Control & Cleaning – Bringing Australian Expertise to Nepal
                        </span>
                    </div>
                    <h1 className="mt-6 text-2xl sm:text-5xl border-transparent lg:text-6xl font-bold text-white leading-tight">
                        Your Ultimate Solution for a Pest-Free, Clean Environment
                    </h1>
                    <p className="mt-6 text-lg text-blue-100/80">
                        Trusted Australian expertise, eco-friendly products, comprehensive pest control and cleaning services.

                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link to={'/booking '}>
                            <Button
                                text={" Get Start Now"}
                                style={"bg-yellow-400 border-2  border-transparent hover:bg-yellow-500 text-white"}
                            />
                        </Link>

                        <Link to={'/services'}>
                            <Button
                                text={" View All Services"}
                                style={"bg-[#0A3ADA1A] border-2 border-white  hover:bg-yellow-400 text-white"}
                            />
                        </Link>
                    </div>
                </div>

                {/* Right image */}
                <div className=" relative mt-10 lg:mt-0 lg:-mr-20">
                    <div className="absolute w-[6rem]  -top-10 -left-[6rem]  ">
                        <img src={mice} alt="mice" />
                    </div>
                    <div className="absolute  -top-10 left-0 w-[10rem]  ">
                        <img src={turnarrow} alt="mice" />
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src={heroImage} alt="heroImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection