
import logo from '../img/foto.png';
import { Link } from 'react-router-dom';


function HomePage() {


    return (
        <div className='HomePage'>
            <div className="product flex flex-col md:flex-row justify-center items-center">
            <div className="image-container md:w-1/2 mb-4 md:mb-0 flex justify-center">
    <img
        src="https://via.placeholder.com/200" 
        alt="Profile"
        className="rounded-full border-2 border-gray-300"
    /> 
    </div>
      <div className="info md:w-1/2 m-2.5">
        <div className="l1 flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Pan</h1>
          <p className="value font-bold text-beige-granier">$30</p>
        </div>
        <div className="l2 flex justify-between mb-6">
          <div>
            <p className="font-bold mr-4">Estado: Disponible</p>
          </div>
          <div>
            <p className="font-bold">
              Cantidad:
              <input
                type="number"
                value= "4"
                min="1"
                max="10"
              />
            </p>
          </div>
        </div>
        <div className="details">
          <p className="label font-bold">Descripción:</p>
          <p className="description border-2 pb-20 rounded-lg">
            Tremendo pan
          </p>
          <div className="justify-center flex mt-20 mb-20">
            <button
              className="border-2 rounded-lg p-0.5 pl-12 pr-12 text-naranjaunimet transition duration-300 border-naranjaunimet hover:text-moradooscuro hover:bg-naranjaunimet"
            >
              + Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
             <div className="min-h-screen bg-gradient-to-b from-violetaoscuro to-rojoencendido flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-20 w-full max-w-6xl relative"> 
                <button className="absolute top-2 right-2  bg-naranjaunimet shadow-2xl border-white border- text-white px-1 py-1 rounded transition duration-300  hover:text-white hover:bg-moradoclaro">
                    Regresar
                </button>
                <h2 className="text-center text-5xl font-bold mb-28">Perfil del Administrador</h2> 
                <div className="flex items-center justify-center mb-10">
                    <p className="mr-40 text-5xl font-semibold">Messi</p>
                    <div className='flex flex-col items-center '>
                    <img
                        src="https://via.placeholder.com/200" 
                        alt="Profile"
                        className="rounded-full border-2 border-gray-300"
                    /> 
                    <h1 className="mt-8 text-2xl font-semibold" >Foto de Perfil</h1>
                    </div>
                </div>
                <button className="absolute bottom-2 right-2  bg-naranjaunimet shadow-2xl border-white border- text-white px-1 py-1 rounded transition duration-300 hover:text-white hover:bg-moradoclaro">
                    Cerrar Sesión
                </button>
            </div>
        </div>
            <div className="flex h-screen">
            {/* Lado izquierdo */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
                <h1 className="text-4xl font-bold text-center">Iniciar sesión</h1>
                <form className="space-y-4 w-full max-w-xs">
                    <div>
                        
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="mt-20 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Correo Electrónico" 
                        />
                    </div>
                    <div >
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="mt-1 mb-12 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Contraseña" 
                        />
                    </div>
                    <button type="submit" className=" w-full bg-naranjaunimet text-white py-2 rounded-lg transition duration-300 hover:text-violetaclaro hover:bg-white">Iniciar sesión</button>
                </form>
            </div>
            {/* Lado derecho */}
            {/* bg-gradient-to-b from-violetaoscuro to-rojoencendido es una forma de hacer backgrounds gradientes*/}
            {/* bg-gradient-to-b la letra del final es la direccion de los colores y los otros "To" son los colores*/}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gradient-to-b from-violetaoscuro to-rojoencendido">
                <h1 className="text-6xl mb-4 text-white font-bold text-center">¿No te haz registrado?</h1>
                <p className="text-lg text-gray-300 text-center mt-4 mb-20">Regístrate con tus datos personales para usar todas las características de la página</p>
                <button className="w-52 mt-8 border-4 text-white border-white py-2 px-4 rounded-lg transition duration-300 hover:bg-white hover:text-violetaclaro">Registrarme</button>
            </div>
        </div>
          
        <div className="flex h-screen">
            {/* Lado izquierdo */}
            {/* bg-gradient-to-b from-violetaoscuro to-rojoencendido es una forma de hacer backgrounds gradientes*/}
            {/* bg-gradient-to-b la letra del final es la direccion de los colores y los otros "To" son los colores*/}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gradient-to-b from-violetaoscuro to-rojoencendido">
                <h1 className="text-6xl mb-4 text-white font-bold text-center">¿Ya tienes una cuenta?</h1>
                <p className="text-lg text-gray-300 text-center mt-4 mb-20">Inicia sesión para usar todas las características de la página</p>
                <button className="w-52 mt-8 border-4 text-white border-white py-2 px-4 rounded-lg transition duration-300 hover:bg-white hover:text-violetaclaro">Iniciar sesión</button>
            </div>

            {/* Lado derecho */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
                <h1 className="text-4xl font-bold text-center">Registrarse</h1>
                <form className="space-y-4 w-full max-w-xs">
                    <div>
                        
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="mt-20 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Correo Electrónico" 
                        />
                    </div>
                    <div >
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="mt-1 mb-12 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Contraseña" 
                        />
                    </div>
                    <button type="submit" className=" w-full bg-naranjaunimet text-white py-2 rounded-lg transition duration-300 hover:text-violetaclaro hover:bg-white">Registrarse</button>
                </form>
            </div>
        </div>
            
            <div className='MallMart bg-gradient-to-t from-moradooscuro to-purple-950'>
                <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src={logo} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={logo} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={logo} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={logo} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={logo}className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                        </div>
                        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                      
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            <div className='R1 p-5'>
                <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Recomendación General 1</span>
                <div className="flex flex-wrap">
                    
                    
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-morarosa m-5 border-b-4 border-b-moradooscuro shadow-lg">
                    <Link onClick={() => {scroll(0, 0)}} to="/productos">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={logo} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                        
                            <div className="flex items-center mt-2.5 mb-5">
                                <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Producto</h5>
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro dark:text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-moradooscuro dark:text-white ms-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <Link onClick={() => {scroll(0, 0)}} to="/carrito">
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-moradooscuro dark:hover:bg-moradoclaro dark:focus:bg-moradoclaro">Add to cart</a>
                                    </Link>
                                </div>
                            </div>
                            </Link>
                    </div>
                   
                    
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-morarosa m-5 border-b-4 border-b-moradooscuro shadow-lg">
                        <Link onClick={() => {scroll(0, 0)}} to="/productos">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={logo} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                        
                            <div className="flex items-center mt-2.5 mb-5">
                                <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Producto</h5>
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg className="w-4 h-4 text-moradooscuro dark:text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-moradooscuro dark:text-white ms-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <Link onClick={() => {scroll(0, 0)}} to="/carrito">
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-moradooscuro dark:hover:bg-moradoclaro dark:focus:bg-moradoclaro">Add to cart</a>
                                    </Link>
                                </div>
                            </div>
                            </Link>
                    </div>
                    
                    
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
                <div className='Ad w-1/2 bg-gradient-to-t from-naranjaunimet to-rojoapagado p-10 rounded-tl-3xl flex-col'>
                    <div className='bg-white box-border h-1/2  w-full p-4 mb-3 rounded-2xl'></div>
                    <div className='bg-white box-border h-1/2  w-full p-4 mb-3 rounded-2xl'></div>
                   
                </div>
                
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

export default HomePage;