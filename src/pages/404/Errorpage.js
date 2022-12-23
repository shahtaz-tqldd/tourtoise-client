import React from 'react'
import useTitle from '../../hooks/useTitle'

const Errorpage = () => {
  useTitle('404 Error')
  return (
    <div className='flex flex-col items-center py-40'>
      <h2 className='text-5xl'>404</h2>
      <p className='text-3xl'>Page Not Found!</p>
    </div>
  )
}

export default Errorpage