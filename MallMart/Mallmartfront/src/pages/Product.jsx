
function Product() {


    return (
        <div className='Product'>
            <div className='img'>
                <h1>Foto</h1>
            </div>
            <div className='Product_'>
                <h1>Nombre del Producto</h1>
                <h1>Precio</h1>
                <h1>Valoración</h1>
                <h1>Descripcion</h1>
                <div className='Add'>
                    <h1>Cantidad</h1>
                    <button>+</button>
                </div>
                <button>Añadir al carrito</button>
            </div>
            <div className='R'>
                
                <h1>Recomendación según la compra</h1>
         
            </div>
        </div>
    );
}

export default Product;