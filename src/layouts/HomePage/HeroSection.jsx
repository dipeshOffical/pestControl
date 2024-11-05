import Button from "../../components/Button"
import heroImage from '../../assets/heroImage.png'
import mice from '../../assets/mice.png'
import turnarrow from '../../assets/turnarrow.png'
function HeroSection() {
    return (
        <div className="bg-primary min-h-[600px] relative overflow-hidden">
            {/* Mouse decoration */}


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between">
                {/* Left content */}
                <div className="max-w-xl lg:max-w-2xl z-10">
                    <div className="inline-block">
                        <span className="bg-red-primary text-white px-4 py-1.5 rounded-full text-sm font-medium">
                            #01 Pest Control & Cleaning Service
                        </span>
                    </div>
                    <h1 className="mt-6 text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        A Cleaner, Safer Environment Starts Here
                    </h1>
                    <p className="mt-6 text-lg text-blue-100/80">
                        Suspendisse nunc vestibulum cras proin luctus lectus enim laoreet
                        lorem. Nunc felis eros pretium semper augue. In pharetra condimentum.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button
                            text={" Get Start Now"}
                            style={"bg-yellow-400 hover:bg-yellow-500 text-white"}
                        />

                        <Button
                            text={" Get Start Now"}
                            style={"bg-[#0A3ADA1A] border-2 border-white  hover:bg-yellow-500 text-white"}
                        />
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