import React from 'react'

function ServicePage() {
    return (
        <section className="bg-gray-50 p-8 md:p-16 lg:flex lg:items-center lg:space-x-8">
          {/* Text Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900">Pest Control</h2>
            <p className="text-red-500 font-semibold mt-2">Safe, Effective, and Eco-Friendly Solutions</p>
            <p className="text-gray-600 mt-4">
              We provide comprehensive pest control services tailored to eliminate unwanted pests while keeping your
              environment safe and healthy. Our team uses eco-friendly, non-toxic products that are effective against pests
              yet gentle on your home, family, and pets. Whether you're dealing with termites, rodents, cockroaches, or
              other common pests, our experts ensure lasting results with minimal disruption to your routine.
            </p>
    
            <h3 className="font-bold text-lg mt-8">Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <p>Safe for children and pets</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <p>Environmentally friendly methods</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <p>Long-term pest prevention</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <p>Safe for children and pets</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <p>Environmentally friendly methods</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <p>Long-term pest prevention</p>
              </div>
            </div>
          </div>
    
          {/* Image */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <img
              src="your-image-url.jpg" // replace this with the path to your image
              alt="Pest Control Professional"
              className="rounded-lg border-4 border-red-500"
            />
          </div>
        </section>
      );
}

export default ServicePage