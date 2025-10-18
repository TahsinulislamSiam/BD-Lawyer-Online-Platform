import React from 'react';

const AppoinmentPage = () => {
    return (
        <div>
            <h1 className='text-center m-5 text-3xl font-bold'>Book an Appoinment</h1>
            <p className='bg-amber-200 rounded-2xl p-2 m-2'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
            <button className='btn bg-green-500 hover:bg-green-600 rounded-2xl w-full m-4'>Book Appoinment Now</button>
        </div>
    );
};

export default AppoinmentPage;