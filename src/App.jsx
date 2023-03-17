import React from 'react';
import Cards from './components/Cards';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route exact path="/add-movie" element={<AddMovie />} />
            </Routes>
        </>
    );
};

export default App;
