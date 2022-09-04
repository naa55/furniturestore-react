import React from 'react';
import { products } from '../data';
import ProductSlider from './ProductSlider';
const Products = () => {
  const {title, subtitle} = products;
  return <div className='section text-center' id='product'>
      <div className="container mx-auto">
          <div>
            <h2 className='title'>{title}</h2>
            <p className='max-w-72 mx-auto mb-24 lg:mb-auto'>{subtitle}</p>
          </div>
          {/* {} */}
          <ProductSlider/>
      </div>
  </div>;
};

export default Products;
