import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage,LoginPage, OtpPage, Register } from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/home-page" element={<HomePage/>}/>
            <Route path="/otp-page" element={<OtpPage/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
};

export default Router;