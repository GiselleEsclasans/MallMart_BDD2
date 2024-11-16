
function Cart() {
    

    return (
        <div className='Cart'>
            <span className=" text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Tu Carrito de Productos</span>
            
            <div className='Cart_'>
                <div>
                    <h1>Productos</h1>
                    <h1>Precio</h1>
                    <h1>Cantidad</h1>
                    <h1>Total</h1>
                </div>
                <div className='Product_'>
                    <h1>foto</h1>
                    <h1>Nombre del Producto</h1>
                    <button>Eliminar</button>
                    <h1>Precio</h1>
                
                    <div className='Add'>
                        <h1>Cantidad</h1>
                        <button>+</button>
                    </div>
                    <h1>Total</h1>
                   
                  
                </div>
                <h1>Sub-total</h1>
                <h3>Los impuestos y el costo de envío</h3>
                <button>Comprar</button>
            </div>
            <div className='R2'>
                <div className='R2_'>
                    <h1>Recomendación 2 </h1>
                </div>
                <div className='Ad'>
                    <h1>Publicidad</h1>
                </div>
                
            </div>
            <div className='Category'>
                <button>botón1</button>
                <h1>Categorías</h1>
                <button>botón2</button>
            </div>
        </div>
    );
}

export default Cart;