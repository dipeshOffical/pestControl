import { Link } from "react-router-dom";


const ServiceCard = ({ icon, title, description }) => (
  <div className=" relative flex flex-col gap-4  items-center px-6 pt-14 pb-6 bg-white rounded-lg shadow-sm border-2 border-gray-200 ">
    <div className="absolute overflow-hidden -top-[2.5rem] w-20 h-20 flex items-center justify-center rounded-full   border-2 border-gray-200 bg-white">
      <img src={icon} alt="" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900  ">{title}</h3>
    <p className="text-gray-600  text-center">{description}</p>
    <Link to={'/booking'} >
      <button className="flex   items-center text-red-500 hover:text-white hover:bg-red-500 transition-all border-2 border-red-600 rounded-md justify-center py-1 px-4 ">
        Book Now
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </Link>
  </div>
);
export default ServiceCard