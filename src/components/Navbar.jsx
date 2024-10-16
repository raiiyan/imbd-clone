import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-200
    p-4 lg:text-lg justify-center gap-7'>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar