
const TeamCard = ({ name, email, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden sm:flex sm:items-center">
      <div className="sm:w-1/3">
        <img src={image} alt={name} className="w-full h-64 object-cover sm:h-auto" />
      </div>
      <div className="p-6 sm:w-2/3">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{email}</p>
        {/* Add any other relevant information */}
      </div>
    </div>
  );
};

export default TeamCard;