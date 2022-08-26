import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listProductDetail } from "../actions/productActions";
const ProductScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [qty, setQty] = useState(1);

  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;

  useEffect(() => {
    dispatch(listProductDetail(id));
  }, [dispatch, id]);
  const addCartHandler=()=>{
    navigate(`/cart/${id}/?qty=${qty}`)
  }

  return (
    <div className="grid grid-cols-3 px-10 py-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h1 className="text-3xl font-bold py-2">{product.name}</h1>
        <div className="flex">
          <h1 className="text-2xl font-bold">Author Name :</h1>
          <h2 className="px-2 text-2xl font-bold">{product.author}</h2>
        </div>
        <div>
          <h1 className="text-3xl text-red-600 py-2 font-bold">
            ₹{product.price}
          </h1>
        </div>
        <div>
          <p className="text-xl">{product.description}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-evenly">
          <h1 className="font-bold text-xl">Price:</h1>
          <h2 className="font-bold text-xl">₹{product.price}</h2>
        </div>
        <div className="flex justify-evenly">
          <h1 className="font-bold text-xl py-5 px-5">Status:</h1>
          <h2 className="font-bold text-xl py-5">
            {product.countInStock > 0 ? "In Stock" : "Not Available"}
          </h2>
        </div>
        <hr></hr>
        {product.countInStock > 0 && (
          <div className="flex justify-evenly py-3">
            <h1 className="text-xl font-bold ">Qty</h1>
            <select value={qty} onChange={(e) => setQty(+e.target.value)}>
              {[...Array(product.countInStock).keys()].map((i) => (
                <option
                  key={i + 1}
                  value={i + 1}
                  className="border-2 border-sky-500"
                >
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="text-center mt-3">
          <button
            className="bg-sky-500/100 text-white hover:bg-red-500 font-bold py-2 px-4 rounded w-48"
            style={{cursor:`${product.countInStock===0 ? 'not-allowed':'pointer'}`}}
            onClick={addCartHandler}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductScreen;
