'use client';

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
// import { words } from 'app/lib/data';
// import MediaQuery from "react-responsive";

const Searchbar = () => {

    const [setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if(e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0,3))
    }

  return (
    <form className='flex justify-center w-full max-w-md mx-auto relative'>
        <div className="flex place-items-center w-full"> {/* Use flex to align items */}
            <input 
            type="search" 
            placeholder='Search' 
            className='text-center min-w-48 ml-2 sm:min-w-60 sm:-ml-10 md:min-w-96 md:-ml-28 lg:min-w-[600px] lg:-ml-48 p-2 rounded-full bg-white text-black outline outline-purple-500 outline-1' // Added flex-grow
            onChange={(e) => handleSearch(e)} 
            autoComplete="off"
            />
            <button className='-ml-9 p-1.5 bg-orange-500 rounded-full'> {/* Added margin left to separate the button from the input */}
                <AiOutlineSearch />
            </button>
        </div>
        {
            // activeSearch.length > 0 && (
            //     <div className="absolute top-20 p-4 bg-gray-400 text-black w-full rounded-xl -translate-x-1/2 flex flex-col gap-2">
            //         {
            //            activeSearch.map(s => (
            //             <span key={s}>{s}</span>
            //            ))
            //         }
            //     </div>
            // )
        }
    </form>
  )
}

export default Searchbar
