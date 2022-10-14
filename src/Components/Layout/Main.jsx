import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ReactRegisBoostrap from '../ReactRegisBoostrap/ReactRegisBoostrap';

const Main = () => {
    return (
        <div>
    <h1 className='text-success'>This is the Authentication</h1>
            <Outlet />
        </div>
    );
};

export default Main;