"use client"
import { useBoardStore } from '@/store/BoardStore';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

function SearchBox() {
    const { searchString, setSearchString } = useBoardStore();
    return (
        <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />
            <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder='Search' className='flex-1 outline-none p-2' />
            <button hidden type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchBox