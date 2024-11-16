
import Carrousel from '../components/carrousel';
import Categoryfooter from '../components/categoryfooter';
import Miniproductcard from '../components/miniproductcard';
import Productcard from '../components/productcard';
import Rightmediumproductcard from '../components/rightmediumproductcard';
import logo from '../img/foto.png';
import { Link } from 'react-router-dom';


function HomePage() {


    return (
        <div className='HomePage'>
            <Productcard />
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
                        <Link onClick={() => {scroll(0, 0)}} to="/productos">
                        <div className="w-30  bg-white border border-gray-200 rounded-lg  dark:bg-rose-300 m-5 border-b-4 border-b-rojoapagado shadow-lg">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={logo} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                            
                                <div className="flex items-center mt-2.5 mb-5">
                                    <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Producto</h5>
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado dark:text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-rojoapagado dark:text-white ms-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                        <Link onClick={() => {scroll(0, 0)}} to="/carrito">
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rojoapagado dark:hover:bg-rojoencendido dark:focus:bg-moradoclaro">Add to cart</a>
                                        </Link>
                                    </div>
                                </div>
                        </div>
                        </Link>
                        <Link onClick={() => {scroll(0, 0)}} to="/productos">
                        <div className="w-30 bg-white border border-gray-200 rounded-lg  dark:bg-rose-300 m-5 border-b-4 border-b-rojoapagado shadow-lg">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={logo} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                            
                                <div className="flex items-center mt-2.5 mb-5">
                                    <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Producto</h5>
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-rojoapagado dark:text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-rojoapagado dark:text-white ms-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                        <Link onClick={() => {scroll(0, 0)}} to="/carrito">
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rojoapagado dark:hover:bg-rojoencendido dark:focus:bg-moradoclaro">Add to cart</a>
                                        </Link>
                                    </div>
                                </div>
                        </div>
                        </Link>
                    </div>
                    
                </div>
                <Rightmediumproductcard />
                
            </div>
        <Categoryfooter />
        </div>
    );
}

export default HomePage;