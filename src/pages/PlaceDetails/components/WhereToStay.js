import React from 'react'

const WhereToStay = () => {
    return (
        <div className='bg-white rounded-lg p-6 mt-5'>
            <h2 className='text-3xl font-bold mb-4'>Where to stay?</h2>
            <p className='text-justify'>
                <ol>1. Hotels</ol>
                <ol>2. Resorts</ol>
            </p>
            <button className='btn btn-sm btn-outline rounded-sm btn-primary normal-case mt-5'>Book Hotels</button>
        </div>
    )
}

export default WhereToStay