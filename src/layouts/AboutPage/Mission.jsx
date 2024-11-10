import mission from '../../assets/mission.jpeg'

export default function Mission() {
    return (
      <div className="relative bg-blue-900 overflow-hidden">
        <div className=" mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
          {/* Left circular image */}
          <div className="hidden md:block absolute -left-[5rem] -bottom-[3rem] w-48 h-48 lg:w-64 lg:h-64">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
                <img
                  src={mission} 
                  alt="Pest control professional at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
  
          {/* Right circular image */}
          <div className="hidden md:block absolute -right-[5rem] -top-[3rem] w-48 h-48 lg:w-64 lg:h-64">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
                <img
                  src={mission}
                  alt="Cleaning professional at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
  
          {/* Content */}
          <div className="max-w-2xl  xl:max-w-4xl 2xl:max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-white text-lg mb-4">Our Mission</h2>
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-8">
              Opal Clean & Pest
            </h1>
            <div className="space-y-6 text-white/90">
              <p className="lg:text-lg">
              At Opal Pest Control & Cleaning Services, we pride ourselves on delivering top-tier pest management solutions backed by years of experience in Australia. Our mission is to provide safe, effective, and environmentally friendly treatments that keep your spaces pest-free and hygienic. We offer a wide range of services designed to meet the unique needs of our customers, from residential homes to commercial businesses.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    )
  }