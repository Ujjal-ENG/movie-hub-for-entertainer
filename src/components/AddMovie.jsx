import { Button } from '@mui/material';
import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { moviesRef } from './firebase/firebase';
import swal from 'sweetalert';
const AddMovie = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        year: 0,
        description: '',
        img: ''
    });
    const { title, year, description, img } = form;

    const addMovie = async () => {
        setIsLoading(true);
        try {
            await addDoc(moviesRef, form);
            swal({
                title: 'Successfully added movie',
                icon: 'success',
                buttons: false,
                timer: 3000
            });
        } catch (error) {
            swal({
                title: 'Error Occured and the error is' + error,
                icon: 'error',
                buttons: true
            });
        }
        setIsLoading(false);
    };

    const handleChange = (e) => {
        setForm((ps) => ({
            ...ps,
            [e.target.id]: e.target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie();
        setForm({
            title: '',
            year: 0,
            description: '',
            img: ''
        });
    };
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Movie</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Add the Latest Movie in Our Database</p>
                    </div>
                    <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-white">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={title}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-white">
                                        Year
                                    </label>
                                    <input
                                        type="number"
                                        id="year"
                                        name="year"
                                        value={year}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-white">
                                        image
                                    </label>
                                    <input
                                        type="text"
                                        id="img"
                                        name="img"
                                        value={img}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7  text-sm text-white">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={description}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full flex justify-center">
                                <Button variant="contained" type="submit">
                                    {isLoading ? <TailSpin height={25} color="white" /> : 'Add Movie'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddMovie;
