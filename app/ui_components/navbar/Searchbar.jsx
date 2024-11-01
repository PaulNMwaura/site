'use client';

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
// import { words } from 'app/lib/data';
// import MediaQuery from "react-responsive";

const Searchbar = () => {

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if(e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0,3))
    }

  return (
    <form className=' flex justify-center w-[300px] relative'>
       <div className="relative"> {/* Search Icon */}
            <input type="search" placeholder='search' className='text-center w-[600px] p-4 rounded-full bg-white text-black hover:outline outline-1' onChange={(e) => handleSearch(e)}/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-orange-500 rounded-full'>
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
