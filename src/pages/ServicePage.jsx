import BackgroundImage from "../components/BackgroundImage";
import ServiceDescription from "../layouts/ServicePage/ServiceDescription";
import Services from "../layouts/ServicePage/Services";

function ServicePage() {
    return (
       <>
       <BackgroundImage text={'Services'}/> 
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ServiceDescription/>
        <Services/>
       </div>
       </>
      );
}

export default ServicePage