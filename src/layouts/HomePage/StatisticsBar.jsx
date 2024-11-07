import React from 'react';
import { stats } from '../../utils/static-data';

const StatItem = ({ number, label }) => (
  <div className="flex flex-col items-center justify-center px-4 md:px-8">
    <div className="flex items-baseline gap-1">
      <span className="text-2xl md:text-4xl font-bold text-white">
        {number.replace('+', '')}
      </span>
      {number.endsWith('+') && (
        <span className="text-xl md:text-3xl font-bold text-white">+</span>
      )}
    </div>
    <p className="text-sm md:text-base text-blue-100 mt-1 text-center whitespace-nowrap">
      {label}
    </p>
  </div>
);

const StatsBar = () => {
 

  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItem number={stat.number} label={stat.label} />
              {index < stats.length - 1 && (
                <div className="hidden md:block h-12 md:h-16 w-px border-r-2 bg-blue-800/50" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
