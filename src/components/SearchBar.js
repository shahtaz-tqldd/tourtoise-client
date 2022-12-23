import React from 'react'

const SearchBar = ({ searchBar }) => {
    const { text, pHolder} = searchBar
    return (
        <div className='flex items-center lg:flex-row md:flex-row flex-col mb-6'>
            <div>
                <h2 className='text-2xl font-bold  mb-4'>{text}</h2>
                <form className='flex items-center'>
                    <input type="text" placeholder={`${pHolder}`} className="input input-bordered w-80 focus:outline-none" />
                    <button className="btn btn-primary rounded-l-none -ml-4 ">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar