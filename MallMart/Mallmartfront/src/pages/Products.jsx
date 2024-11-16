import { Link } from 'react-router-dom';
import logo from '../img/logo2.png';

function Products() {


    return (
        <div className='Products'>
        
            <div className='Busqueda bg-moradooscuro p-5'>
                
                <form className="max-w-lg mx-auto">
                    <div className="flex">            
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-morarosa bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-moradoclaro  dark:border-moradoclaro dark:placeholder-gray-400 dark:text-moradooscuro dark:focus:border-morarosa" placeholder="Buscar..." required />
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-morarosa rounded-e-lg border border-morarosa hover:bg-morarosa focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-morarosa dark:hover:bg-moradoclaro dark:focus:ring-moradoclaro">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>


            </div>
            

        <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 m-5">
            <li className="me-2">
                <a href="#" className="inline-block px-4 py-3 text-white bg-moradooscuro rounded-lg active" aria-current="page">Categoría 1</a>
            </li>
            <li className="me-2">
                <a href="#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-morarosa dark:hover:text-white">Categoría 2</a>
            </li>
            <li className="me-2">
                <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-morarosa dark:hover:text-white">Categoría 3</a>
            </li>
            <li className="me-2">
                <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-morarosa dark:hover:text-white">Categoría 4</a>
            </li>
            
        </ul>

            
         
            <div className='Products_'>
                        <Link onClick={() => {scroll(0, 0)}} to="/productos">
                        <div className="w-30 bg-white border border-gray-200 rounded-lg  dark:bg-rose-300 m-5 border-b-4 border-b-rojoapagado shadow-lg p-5">
                       
                            <div className="px-5 pb-5 flex items-center justify-between">
                                <div>
                                    <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Nombre del producto</h5>
                                        <div className="flex items-center  mt-2.5 mb-2">
                                            
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
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white mb-5">$599</span>
                                                    
                                                
                                            </div>
                                            <Link onClick={() => {scroll(0, 0)}} to="/carrito">
                                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rojoapagado dark:hover:bg-rojoencendido dark:focus:bg-moradoclaro">Add to cart</a>
                                            </Link>
                                        </div>
                                        <a href="#">
                                            <img className="p-8 rounded-t-lg" src={logo} alt="product image" />
                                        </a>
                                </div>
                        </div>
                        </Link>
                        <Link onClick={() => {scroll(0, 0)}} to="/productos">
                        <div className="w-30 bg-white border border-gray-200 rounded-lg  dark:bg-rose-300 m-5 border-b-4 border-b-rojoapagado shadow-lg p-5">
                       
                            <div className="px-5 pb-5 flex items-center justify-between">
                                <div>
                                    <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Nombre del producto</h5>
                                        <div className="flex items-center  mt-2.5 mb-2">
                                            
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
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white mb-5">$599</span>
                                                    
                                                
                                            </div>
                                            <Link onClick={() => {scroll(0, 0)}} to="/carrito">
                                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rojoapagado dark:hover:bg-rojoencendido dark:focus:bg-moradoclaro">Add to cart</a>
                                            </Link>
                                        </div>
                                        <a href="#">
                                            <img className="p-8 rounded-t-lg" src={logo} alt="product image" />
                                        </a>
                                </div>
                        </div>
                        </Link>
            </div>
         

            <div className='Category bg-naranjaunimet p-5 pl-2'>
            <span className="text-3xl font-bold text-gray-900 dark:text-white m-5">Categorías</span>
                <div className='flex flex-nowrap justify-between'>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                </div>
            </div>
        </div>
    );
}

export default Products;