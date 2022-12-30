import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { AiFillEdit } from 'react-icons/ai';

const About = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='my-20 flex justify-center'>
            <div className='bg-white p-5'>
            <img className='p-5 mx-auto w-1/2' src={user?.photoURL} alt="" />
            <h2 className='text-center text-xl font-bold my-2'>Name: {user?.displayName}</h2>
            <h2 className='text-center text-xl font-bold'>Email: {user?.email}</h2>
            </div>
            <AiFillEdit className='text-2xl ml-5 cursor-pointer'></AiFillEdit>
        </div>
    );
};

export default About;