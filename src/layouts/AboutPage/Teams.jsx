import React from 'react';
import TeamCard from './TeamCard';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Joon Rai',
      email: 'info@rai.com.au',
      image: 'joon-rai.jpg',
    },
    {
      name: 'S Basnet',
      email: 'swostika.basnet@baryal.com.np',
      image: 's-basnet.jpg',
    },
    {
      name: 'T. Punmagar',
      email: 'Purna@.com.au',
      image: 't-punmagar.jpg',
    },
    {
      name: 'S. Tripathi',
      email: 'sachin@.com.au',
      image: 's-tripathi.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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