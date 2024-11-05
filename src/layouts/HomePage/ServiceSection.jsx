
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../utils/static-data';


const ServiceSection = () => {
 

  return (
    <div className='bg-[#FAFAF8]'>   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
      <div className="text-center mb-20">
        <p className="text-red-500 text-sm font-medium mb-2">Our Services</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Effective, Eco-Friendly Pest Control</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Protect your home and business with our safe, targeted pest control solutions. From termites to
          rodents, our experts handle it all, ensuring a pest-free environment you can rely on
        </p>
      </div>



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
    </div>
  );
};

export default ServiceSection;  