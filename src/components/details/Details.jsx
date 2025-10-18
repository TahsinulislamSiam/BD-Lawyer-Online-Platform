import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppoinmentPage from '../AppoinmentPage/AppoinmentPage';

const Details = () => {

    const {id} = useParams();
    const lawId = parseInt(id)
    const data = useLoaderData();
    const singleLawyer = data.find(lawyer =>lawyer.layerId===lawId)
    const {image,name,specially,experience,consultationFee,law}= singleLawyer
    return (

        <div>
            <div className='p-5 m-4 bg-gray-300 border'>
                <h1 className='text-3xl text-center font-bold'>Lawyer Details</h1>
                <p>You can Find here your perfect Lawyer . This Details Make You understand that is it perfect to you or not . </p>
            </div>
           <div className='p-4 flex bg-gray-200 m-4'>
             <img src={image} alt="" />
           <div className='p-5'> <p className='mt-4 text-2xl font-semibold'>{name}</p>
            <p className='font-bold'>{specially}</p>
            <p className='text-blue-600'>Experience: {experience}</p>
            <p className='font-extralight'>Licence Number: {law}</p>
            <p className='text-2xl'> <span className='text-red-700'>Consultation Fee:</span> {consultationFee} Taka</p>
            </div>
           </div>

           <div className='bg-gray-300 p-5'>
                <AppoinmentPage></AppoinmentPage>
           </div>
        </div>
    );
};

export default Details;