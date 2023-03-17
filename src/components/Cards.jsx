import React, { useState } from 'react';
import Card from './Card';

export default function Cards() {
    const [data, setData] = useState([]);

    return (
        <>
            <div className="grid grid-cols-4 justify-items-center mt-10 ">
                <Card />
            </div>
        </>
    );
}
