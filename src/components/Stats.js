import React from 'react';
import { stats } from '../data';
// import { useState } from 'react';
// import ListsContext from '../context/ListContext';
const Stats = () => {
  // const {data, deleteListItem, addNewName, editListItem} = useContext(ListsContext);
  // const [name, setName] = useState('')

  // const handleNameChange = (e) => {
  //   setName(e.target.value)
  // }

  // const randam = () => {
  //   return Math.floor(Math.random(0, 100000))
  // }

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //       let item = {
  //         id: randam(),
  //         name
  //       }
  //   addNewName(item);
  //   setName('')
  // }
  return (
    <div className='bg-accent rounded-lg p-12 mt-96'>
        <div className="flex flex-wrap gap-y-8" >
          {stats.map((stat, index) => (
            <div key={index} className='min-h-4 w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none'>
              <div className='text-2xl font-semibold lg:text-4xl'>{stat.value}</div>
              <div className='text-base font-light mx-auto lg:text-xl'>{stat.text}</div>
            </div>
          ))}
        </div>
    </div>
  )
};

export default Stats;
