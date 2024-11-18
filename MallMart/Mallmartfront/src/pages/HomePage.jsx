import Registercard from '../components/registercard';
import Carrousel from '../components/carrousel';
import Logincard from '../components/logincard';
import Productcard from '../components/productcard';
import Profilecard from '../components/profilecard';
import Categoryfooter from '../components/categoryfooter';
import React from 'react';
import logo from '../img/foto.png';
import { Link } from 'react-router-dom';
import Miniproductcard from '../components/miniproductcard';
import Mediumproductcard from '../components/mediumproductcard';
import Rightmediumproductcard from '../components/rightmediumproductcard';


function HomePage() {


    return (
        <div className='HomePage'>
            <Productcard />
            <Profilecard />
            <Logincard />
            <Registercard />
            <Carrousel />
            
            
            <div className='R1 p-5'>
                <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Recomendación General 1</span>
                <div className="flex flex-wrap">
            
                    <Miniproductcard />
                    <Miniproductcard />
                    
                    
                </div>
                

            </div>
            <div className='R2 flex mb-0 '>
                <div className='R2_ w-1/2 p-5 pr-10'>
                <span className="text-3xl font-bold text-gray-900 dark:text-rojoapagado p-5">Recomendación General 2</span>
                    <div className="flex flex-wrap">
                        <Mediumproductcard />
                        <Mediumproductcard />
                    </div>
                    
                </div>
            <Rightmediumproductcard />
                
            </div>
            <Categoryfooter />
        </div>
    );
}

export default HomePage;