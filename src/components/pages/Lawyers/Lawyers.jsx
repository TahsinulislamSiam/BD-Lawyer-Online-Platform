import React, { Suspense, useEffect, useState } from 'react';
import Lawyer from '../Laywer/Lawyer';

const Lawyers = ({data}) => {
    const [allLawyers, setAllLayers]=useState([]);


    // useEffect (()=> {
    //     fetch("lawyerData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAllLayers(data)
    //     })
    // },[]);
    return (
        <div>
            <h1 className='text-3xl text-center mt-15 p-5 font-semibold'>Our Best Lawyers</h1>

            <Suspense fallback={<span>Loading....</span>}>
                {
                  data.map((singleLawyer)=><Lawyer key={singleLawyer.layerId} singleLawyer={singleLawyer}></Lawyer>)  
                }
            </Suspense>

        </div>
    );
};

export default Lawyers;