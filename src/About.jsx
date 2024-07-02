import React from 'react';
import Comman from './Comman';
import rock from '../src/images/rock.jpg';


const About = () => {
  return (
    <div>
           <Comman name="Welcome to About page" imgsrc={rock} visit="/contact" btname="Contact Now"/>
    </div>
  )
}

export default About
