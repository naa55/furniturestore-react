import React from 'react';
import { features } from '../data';
const Features = () => {
  //destructure feature
  const {title, subtitle, image, items} = features;

  return <div className='section mt-56' id='about'>
    <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-8 md:flex-row '>
        <div className='flex-1 order-1 lg:-order-1 md:-order-1 md:mr-8'>
        <img src={image.type} alt=""/>
        </div>
          <div className='flex-1 flex flex-col justify-end md:mt-12'>
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
          <div>
            {items.map((item, index) => {
             const {title, subtitle, icon} = item;
              return (
                <div className='flex mb-6 lg:last:mb-0' key={index}>
                  <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                  <div className='text-base lg:text-xl font-semibold mb-3'>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        </div>
       
    </div>
  </div>;
};

export default Features;
