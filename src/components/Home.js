import React from 'react'
import Features from './Features'
import FeaturesSecond from './FeaturesSecond'
import Hero from './Hero'
import NewItems from './NewItems'
import Products from './Products'

const Home = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
              <Hero/>
              <Features/>
              <NewItems/>
              <FeaturesSecond/>
              <Products/>
    </div>
  )
}

export default Home