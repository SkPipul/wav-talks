import React from 'react';
import Newsfeed from './Newsfeed/Newsfeed';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-3 my-8 mx-16'>
            <div className='col-span-2 ...'><Newsfeed></Newsfeed></div>
            <div className='mx-auto visible lg:visible ...'><Sidebar></Sidebar></div>
        </div>
    );
};

export default Home;