import React from 'react';

const Lawyer = ({ singleLawyer }) => {
  
    const {image,experience,name,specially,law}= singleLawyer;

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 bg-white rounded-2xl shadow-md border border-gray-200 w-full sm:max-w-md md:max-w-lg lg:grid grid-cols-2 transition-all">
        
        {/* Image */}
        <img
          src={image}
          alt="Lawyer"
          className="w-28 h-28 object-cover rounded-xl"
        />

        {/* Info Section */}
        <div className="flex-1 text-center sm:text-left">
          {/* Availability and Experience */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
              Available
            </span>
            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
              {experience}
            </span>
          </div>

          {/* Name and Specialty */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            {name}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{specially}</p>

          {/* License */}
          <p className="text-gray-600 text-sm sm:text-base mt-1">
          ®{law}
          </p>

          {/* Button */}
          <button className="mt-3 w-full sm:w-auto px-5 border border-blue-500 text-blue-600 font-medium py-2 rounded-full hover:bg-blue-50 transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
