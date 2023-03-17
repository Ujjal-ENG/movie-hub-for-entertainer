import React from 'react';
import { GrAdd } from 'react-icons/gr';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="text-3xl text-red-500 font-bold [-3 border-b-2 border-gray-400 flex items-center justify-between p-4">
            <Link to="/">
                Movie <span className="text-white uppercase">Hub</span>{' '}
            </Link>
            <Link to="/add-movie">
                <Button variant="contained" color="inherit" startIcon={<GrAdd />}>
                    <span className="text-red-500 flex items-center cursor-pointer font-bold">Add New</span>
                </Button>
            </Link>
        </div>
    );
};

export default Header;
