
const TeamCard = ({ name, email, image }) => {
  return (
    <div className="bg-white relative w-[16rem] h-[23rem] shadow-md rounded-lg ">
      <div className="">
        <img src={image} alt={name} className="" />
      </div>
      <div className="p-4 absolute  bottom-0 w-full bg-blue-600 bg-opacity-50">
        <h3 className="text-xl font-bold mb-1 text-center ">{name}</h3>
        <p className="text-white mb-4 text-center ">{email}</p>
        {/* Add any other relevant information */}
      </div>
    </div>
  );
};

export default TeamCard;