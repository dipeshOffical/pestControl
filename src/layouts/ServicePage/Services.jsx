import ServiceCard from "../../components/ServiceCard"
import { services } from "../../utils/static-data"

function Services() {
  return (
    <div>
        <h2 className="text-center text-lg md:text-3xl my-[5rem] font-bold">Pest Control Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-14 ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Services