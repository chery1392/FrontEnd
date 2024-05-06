import React from 'react';
import { getHomes } from '../services/homes';
import { useQuery } from '@tanstack/react-query';
import Loader from '../modules/Loader';
import Header from '../layout/Header';


const HomePage =  () => {

    const {data,isLoading,error} = useQuery({
        queryKey:["homes"],
        queryFn:getHomes
    })
    console.log(data,isLoading,error)
    if (isLoading) return <Loader/>;
    
    return (
        <div>
            HomePage
        </div>
    );
};

export default HomePage;