'use client';

import React from 'react';

const Catalog = ({ name, location, title, services, rating, price }) => {

  return (
    <button onClick={() =>{console.log("clicked")}} className="h-[150px] w-11/12 sm:w-4/5 bg-gray-400 mx-auto rounded-lg items-center flex flex-row drop-shadow-lg transform hover:scale-[1.05] transition-transform duration-300">
        <img className="ml-8" src="/placeholder/Generic-Head.png" style={{ maxWidth: '120px', maxHeight: '120px' }}/>
        <div className="h-full w-full flex flex-col">
        <div className="h-fit w-11/12 mx-auto mt-1 flex flex-row">
            <div className="h-full w-1/2 text-left text-black pl-2">
                {name}
            </div>
            <div className="h-full w-1/2 text-right text-black pr-2">
                {location}
            </div>
        </div>
        <div className="h-4/6 w-11/12 bg-purple-600 rounded-lg mx-auto mt-1 text flex flex-row">
            <div className="h-full w-1/2 text-left text-black text-sm place-content-center pl-2">
                {title} <br /> {services}
            </div>
            <div className="h-full w-1/2 text-right text-black text-sm place-content-center pr-2">
                {rating} <br /> {price}
            </div>
        </div>
        </div>
    </button>
  )
}

export default Catalog