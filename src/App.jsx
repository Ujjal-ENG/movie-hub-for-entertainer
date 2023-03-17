import React from 'react';
import Cards from './components/Cards';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import Details from './components/Details';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route exact path="/add-movie" element={<AddMovie />} />
                <Route exact path="/details" element={<Details />} />
            </Routes>
        </>
    );
};

export default App;
