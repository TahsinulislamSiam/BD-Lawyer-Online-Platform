import React from 'react';
import banner from '../../assets/banner-img-1.png';

const Banner = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img  src={banner} alt="banner"
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white  px-6">
        <h1 className="text-5xl font-semibold mb-4">
          It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally
        </h1>
        <p className="text-lg max-w-2xl font-extralight text-gray-300">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
      </div>
    </div>
  );
};

export default Banner;
