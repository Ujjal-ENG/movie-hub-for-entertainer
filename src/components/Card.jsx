import { Rating } from '@mui/material';
import React from 'react';

const Card = () => {
    return (
        <div className="rounded-md shadow-lg bg-slate-500 p-2 transition-all">
            <img
                src="https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262189/portrait/1920x7706a215f83d91b48e0ae2e88d1c9be3dcb.jpg"
                alt=""
                className="w-[250px] h-[350px] hover:scale-110 transition-all rounded-2xl"
            />

            {/* information */}
            <div className="mt-5">
                {' '}
                <h1 className="text-2xl font-bold">Name: Fantasy Island</h1>
                <h1 className="text-xl font-bold flex items-center">
                    Rating: 5
                    <Rating name="half-rating" defaultValue={5} precision={1} sx={{ marginleft: '10px' }} />
                </h1>
                <h1 className="text-xl font-bold">Year: 2022</h1>
            </div>
        </div>
    );
};

export default Card;
