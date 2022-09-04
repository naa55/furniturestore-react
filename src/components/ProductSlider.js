import React, {useContext} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
import {HiPlus} from 'react-icons/hi';
// import { products } from '../data';
import {Navigation, Pagination} from 'swiper';
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
const ProductSlider = () => {
 const {state} =  CartState()
  const {pages} = state.products;

  console.log(state.products.pages)
  return (
      <Swiper modules={[Pagination, Navigation]} pagination={{clickable: true}} navigation={true} className='productSlider min-h-full'>
        {pages.map((page, index) => {
          return (
            <SwiperSlide key={index}>
                <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 mb-24'>
                  {page.productList.map((product, index) => {
                    // const {image, name, price, oldPrice} = product
                    return <SingleProduct product={product} key={index}/>
  
                  })}
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
  )
};

export default ProductSlider;
