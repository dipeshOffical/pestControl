import { Check } from "lucide-react"
import Button from "../../components/Button"
import whyChoose1 from '../../assets/whyChoose1.png'
import whyChoose2 from '../../assets/whyChoose2.png'
import { Link } from "react-router-dom"

export default function WhyChoose() {
  const features = [
    "Vetted professionals",
    "Affordable Prices",
    "Next day availability",
    "Best Quality",
    "Standard cleaning tasks",
    "Affordable Prices",
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2     gap-12 items-center">
          {/* Images */}
          <div className="relative ">

            <div className="mx-auto max-w-[22rem] ">
              <img
                src={whyChoose2}
                alt="Cleaning professional in protective gear"
                className="w-full "
              />
            </div>
            <div className="absolute right-[10%] lg:right-[2rem]  2xl:right-[5rem] top-[10rem]   w-[14rem]  rounded-3xl border-6 border-white overflow-hidden">
              <img
                src={whyChoose1}
                alt="Cleaning professional in red protective gear"
                className="w-full h-full "
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 pt-4 ">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-block">
                <span className="text-red-primary font-medium">Why Choose Us</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold">
                Your Trusted Partner In Clean And Safe Spaces
              </h2>

              <p className="text-gray-600">
                We make your space shine! Professional and reliable cleaning service
                company providing top-notch solutions for homes and businesses.
                Satisfaction guaranteed!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2  bg-[#F5F4F4] w-[15rem] rounded-md"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-yellow-500" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link>
                  <Button text={' Book Service Now'} style={"bg-yellow-400 hover:bg-yellow-500 text-white "} />
                </Link>
                <Link>
                  <Button text={' View all Services '} style={" border-2 border-gray-500  text-gray-900 hover:text-white hover:border-white hover:bg-yellow-400"} />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}