
import heroImage from '../../assets/heroImage.png'

function ServiceDescription() {
  const cleaningServices = [
    { title: "Tiles & Marble Cleaning and Polishing" },
    { title: "Carpet and Gailaicha Cleaning" },
    { title: "Sofa Cleaning" },
    { title: "Complete Domestic & Commercial Cleaning" }
  ];
  
    return (
        <section className={" bg-[#F2F5F8] p-8 md:p-16 lg:flex gap-6 lg:items-center lg:space-x-8" }>
          {/* Text Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900">Cleaning Services:</h2>
            <p className="text-red-500 font-semibold mt-2">Safe, Effective, and Eco-Friendly Solutions</p>
            <p className="text-gray-600 mt-4">
            Our cleaning services complement our pest control offerings, providing a complete solution for a spotless home or business. </p>
    
            <h3 className="font-bold text-lg mt-8">Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"> {cleaningServices.map((s, i) => (
                        <div className="flex items-center space-x-2" key={i}>
                            <span className="text-red-500">✔</span>
                            <div>{s.title}</div>
                        </div>))
                    }</div>
          </div>
    
          {/* Image */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 ">
            <img
              src={heroImage}
              alt="Pest Control Professional"
              className="rounded-lg mx-auto"
            />
          </div>
        </section>
      );
}

export default ServiceDescription