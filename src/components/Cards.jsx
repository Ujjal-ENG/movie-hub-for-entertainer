import React, { useState } from 'react';
import { movieData } from '../dummtData';
import Card from './Card';

export default function Cards() {
    const [data, setData] = useState(movieData);

    return (
        <>
            <div className="grid grid-cols-4 justify-items-center mt-10 gap-6">
                {data.map((movie, i) => {
                    return <Card key={i} data={movie} />;
                })}
            </div>
        </>
    );
}
