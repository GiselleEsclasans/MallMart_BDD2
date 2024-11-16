import React from 'react';
import { FaShoppingCart, FaUser  } from 'react-icons/fa'; // Importing shopping cart and user icons from react-icons

const Navbar = () => {
  return (
    <div className='bg-azulmorado flex justify-between items-center p-4'>
      <div className='logo'>
      <img src="/Logonaranja.png" alt="Logo" className='h-8' />
      </div>
      <div className='flex items-center'>
        <div className='user mr-4'>
          <FaUser  className='text-white text-2xl' />
          <div className='cart'>
          <FaShoppingCart className='text-white text-2xl' />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;