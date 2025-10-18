import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {

    const {id} = useParams();
    const lawId = parseInt(id)
    const data = useLoaderData();
    const singleLawyer = data.find(lawyer =>lawyer.layerId===lawId)
    const {image,name,specially,experience,consultationFee,law}= singleLawyer
    return (

        <div>
            <h1 className='text-3xl text-center font-bold'>Lawyer Details</h1>
           <div className='p-4 flex'>
             <img src={image} alt="" />
           <div className='p-5'> <p className='mt-4 text-2xl font-semibold'>{name}</p>
            <p className='font-bold'>{specially}</p>
            <p className='text-blue-600'>Experience: {experience}</p>
            <p className='font-extralight'>Licence Number: {law}</p>
            <p className='text-2xl'> <span className='text-red-700'>Consultation Fee:</span> {consultationFee} Taka</p>
            </div>
           </div>
        </div>
    );
};

export default Details;