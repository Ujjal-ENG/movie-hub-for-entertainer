import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { movieData } from '../dummtData';
import Card from './Card';
import { moviesRef } from './firebase/firebase';

export default function Cards() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const data = await getDocs(moviesRef);
            data.forEach((doc) => {
                setData((pS) => [...pS, doc.data()]);
            });
            setIsLoading(false);
        };
        getData();
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <Dna height={100} width="180" color="white" />
                </div>
            ) : (
                <div className="grid grid-cols-4 justify-items-center mt-10 gap-6">
                    {data &&
                        data.map((movie, i) => {
                            return <Card key={i} data={movie} />;
                        })}
                </div>
            )}
        </>
    );
}
