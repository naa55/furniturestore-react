import React from 'react';
import {features} from '../data'
const FeaturesSecond = () => {
  //destrucutre
  const {title, subtitle, image} = features.feature2
  return <div className='section'>
  <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row lg:gap-x-8 md:flex-row '>
      <div className='flex-1 flex flex-col justify-end md:mt-12'>
        <h2 className='title'>{title}</h2>
        <p className='subtitle'>{subtitle}</p>
      </div>
      <div className='flex-1'>
      <img src={image.type} alt=""/>
      </div>
        
      </div>
     
  </div>
</div>;
};

export default FeaturesSecond;
