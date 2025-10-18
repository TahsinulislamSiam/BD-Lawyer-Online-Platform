import React, { useState } from 'react';
import { data, Link } from 'react-router';

const Lawyer = ({ singleLawyer }) => {
  const { image, experience, name, specially, law,layerId } = singleLawyer;


 

  return (
    <div className=" flex justify-center">
      <div className="flex items-start gap-3 p-5 bg-white rounded-2xl shadow-md border border-gray-200 w-full max-w-md transition-all">
        
        
        <img
          src={image}
          alt="Lawyer"
          className="w-28 h-28 object-cover rounded-xl"
        />

        
        <div className="flex-1 text-left">
        
          <div className="flex flex-wrap justify-start gap-2 mb-2">
            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
              Available
            </span>
            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
              {experience}
            </span>
          </div>

          
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-500 text-base">{specially}</p>

          
          <p className="text-gray-600 text-base mt-1">®{law}</p>

        <Link to={`/lawyerDetails/${layerId}`}><button className="mt-3 px-5 border border-blue-500 text-blue-600 font-medium py-2 rounded-full hover:bg-blue-50 hover:cursor-pointer transition-all">
            View Details
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
