import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const data = location.state;
    return (
        <div className="flex justify-center items-center w-full">
            <img src={data.img} alt={data.title} className="w-1/2 h-[500px] flex justify-center items-center" />
            <div>
                <h1 className="text-2xl font-bold">Name: {data.title}</h1>
                <h1 className="text-xl font-bold">Desciption: {data.description}</h1>
            </div>
        </div>
    );
};

export default Details;
