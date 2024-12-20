
function Product() {


    return (
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
    );
}

export default Product;