import React, { useContext } from 'react';
import {hero} from '../data';
import Stats from './Stats';
import {Link} from 'react-router-dom'
const Hero = () => {

  const {title, subtitle, buttonText}  = hero;
  return( 
  <div className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28' id='home'>
    <div className="container mx-auto text-center">
        <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-4xl lg:leading-tight text-accent'>{title}</h1>
        <h2 className='mb-4 max-w-2xl mx-auto text-accent'>Best Furnitures in Ghana</h2>
        <a href='#products' className='bg-black px-4 py-2 rounded-lg hover:bg-gray-900 text-xl transition'>{buttonText}</a>
        <div>
          <Stats/>
        </div>
    </div>
  </div>);
};

export default Hero;
