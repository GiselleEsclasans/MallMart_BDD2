import React from 'react';
import { FaShoppingCart, FaUser  } from 'react-icons/fa'; // Importing shopping cart and user icons from react-icons

const Navbar = () => {
  return (
    <div className='bg-azulmorado flex justify-between items-center p-4'>
      <div className='logo'>
        <h1 className='text-white text-2xl'>Mallmart</h1>
      </div>
      <div className='flex items-center'>
        <div className='user mr-4'>
          <FaUser  className='text-white text-2xl' />
        </div>
        <div className='cart'>
          <FaShoppingCart className='text-white text-2xl' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;