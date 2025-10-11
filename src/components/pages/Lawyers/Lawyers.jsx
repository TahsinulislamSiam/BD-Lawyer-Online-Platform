import React, { useEffect, useState } from 'react';

const Lawyers = () => {
    const [allLawyers, setAllLayers]=useState([]);


    useEffect (()=> {
        fetch("lawyerData.json")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            <h1>All lawyers</h1>

        </div>
    );
};

export default Lawyers;