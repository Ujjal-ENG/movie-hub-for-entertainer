import { Rating } from '@mui/material';
import React from 'react';

const Card = (props) => {
    const { title, img, year } = props.data;

    return (
        <div className="rounded-md shadow-lg bg-slate-500 p-2 transition-all">
            <img src={img} alt={title} className="w-[250px] h-[350px] hover:scale-110 transition-all rounded-2xl" />

            {/* information */}
            <div className="mt-5">
                {' '}
                <h1 className="text-2xl font-bold ">Name: {title.slice(0, 10) + '...'}</h1>
                <h1 className="text-xl font-bold flex items-center gap-4">
                    Rating:
                    <Rating name="half-rating" defaultValue={5} precision={0.5} sx={{ marginleft: '10px' }} />
                </h1>
                <h1 className="text-xl font-bold">Year: {year}</h1>
            </div>
        </div>
    );
};

export default Card;
