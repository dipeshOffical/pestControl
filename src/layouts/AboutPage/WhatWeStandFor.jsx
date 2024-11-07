import { Users, Shield, ArrowUpCircle, Leaf, Award } from "lucide-react"

export default function WhatWeStandFor() {
    const values = [
        {
          icon: Users,
          title: "Customer-Centric Service",
          description: "We put our clients first, ensuring every service is tailored to meet individual needs and exceed expectations.",
        },
        {
          icon: Shield,
          title: "Integrity & Trust",
          description: "We build lasting relationships through transparency, professionalism, and honest service, giving our clients confidence in our work.",
        },
        {
          icon: ArrowUpCircle,
          title: "Continuous Improvement",
          description: "We build lasting relationships through transparency, professionalism, and honest service, giving our clients confidence in our work.",
        },
        {
          icon: Leaf,
          title: "Eco-Friendly Practices",
          description: "We are committed to using safe, non-toxic products and sustainable methods to protect both people and the environment.",
        },
        {
          icon: Award,
          title: "Quality & Excellence",
          description: "We hold ourselves to the highest standards, ensuring each job is done thoroughly and effectively, down to the last detail.",
        },
      ]
    
      return (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values define who we are and guide every service we deliver. At SafeNest, we're committed to excellence,
              integrity, and a client-first approach to create spaces that are safe, clean, and truly cared for.
            </p>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-blue-900 hover:bg-yellow-400 rounded-lg p-8 text-center transition-all duration-300 ease-in-out  ${index >= 3 ? "lg:col-span-1.5" : ""} group`}
              >
                <div className="bg-yellow-400 group-hover:bg-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">{value.title}</h3>
                <p className="text-white/90 group-hover:text-blue-900">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }   