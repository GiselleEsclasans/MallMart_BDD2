import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-azulmorado shadow-md">
      <div className='logo'>
        <h1 className='text-white text-2xl'>Mallmart</h1>
      </div>
      <div className="flex space-x-4">
        <button className="bg-naranjaclaro text-white px-4 py-2 rounded hover:bg-morarosa">
          Regístrate
        </button>
        <button className="bg-naranjaunimet text-white px-4 py-2 rounded hover:bg-morarosa">
          Inicia Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;