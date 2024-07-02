import React from 'react'
import Comman from './Comman';
import rock from '../src/images/rock.jpg';
const Home = () => {
    return (
        <>
         <Comman name="Grow your business" imgsrc={rock} visit="/service" btname="Get Started"/>
        </>
    );
}

export default Home
