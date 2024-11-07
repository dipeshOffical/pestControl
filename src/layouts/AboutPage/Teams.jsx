
import { teamMembers } from '../../utils/static-data';
import TeamCard from './TeamCard';

const Teams = () => {
 

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Teams</h2>
        <p className='max-w-[50rem] text-center mx-auto pb-6 text-gray-600'>Our core values define who we are and guide every service we deliver. At SafeNest, we’re committed to excellence, integrity, and a client-first approach to create spaces that are safe, clean, and truly cared for.</p>
        <div className="grid  w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8   ">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              email={member.email}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;