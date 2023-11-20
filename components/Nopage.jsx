import React from 'react'
import { Link } from 'react-router-dom'

const Nopage = () => {
  return (
      <div className='p-4'>
        <h2 className='p-2'>Error 404: Page Not found</h2>
        <h2 className='p-2'>Kindly click on <Link to='/' className='text-2xl font-bold text-red-900'>HOME</Link> to go back to Home</h2>

      </div>
    
  )
}

export default Nopage