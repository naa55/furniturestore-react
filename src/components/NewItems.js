import React from 'react';
import { newInStore } from '../data';
import NewItemsSlide from './NewItemsSlider'
const NewItems = () => {
  const {title, subtitle, link, icon} = newInStore;
  return (
      <div className="section">
          <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                  <div className='flex md:flex-col items:baseline gap-x-6 mb-6 lg:mb-0'>
                    <h2 className='title max-w-xs lg:mt-8 lg:mb-24'>{title}</h2>
                    <p className='max-w-xs lg:mb-12'>{subtitle}</p>
                    <div className='hidden lg:flex items-center'>
                      <a href="/" className='hover:border-b border-gray-800 lg:items-center font-medium transition-all' >{link}</a>
                      <div className='text-3xl'>{icon}</div>
                    </div>
                  </div>
                  <div className='lg:max-w-3xl xl:max-w-4xl lg:absolute lg:right-24'>
                  <NewItemsSlide/>
                  </div>
                </div>
          </div>
      </div>
  )
};

export default NewItems;
