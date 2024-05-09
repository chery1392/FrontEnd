import React from 'react';
import loader from "../../public/images/Spinner.svg"

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loader;