import React, { Suspense, useState } from 'react';
import Lawyer from '../Laywer/Lawyer';

const Lawyers = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleLawyers = showAll ? data : data.slice(0, 6);

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center font-semibold my-6">
        Our Best Lawyers
      </h1>

      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 justify-items-center">
          {visibleLawyers.map((singleLawyer) => (
            <Lawyer key={singleLawyer.layerId} singleLawyer={singleLawyer} />
          ))}
        </div>
      </Suspense>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Lawyers;
