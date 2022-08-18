import { useState } from "react";
import image from '../images/default.png'

const ProductCard = ({ product }) => {
  const [imgPath,setimgPath]=useState(`${product.image}`)
  
  return (
    <a href={`/product/${product._id}`}>
      <div className="border-2 border-black shadow-xl ... rounded-md ...  hover:shadow-blue-800 h-96 text-center">
        <img
          src={imgPath}
          alt={product.name}
          onError={()=>setimgPath(image)}
          className="h-64 w-48 ml-16 my-4"
        />

        <h1 className="text-2xl py-3 font-semibold">{product.name}</h1>
        <h2 className="text-xl font-bold text-red-600">₹{product.price}</h2>
      </div>
    </a>
  );
};
export default ProductCard;
