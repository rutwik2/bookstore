import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <>
      <h1 className="text-3xl pl-5 font-bold mt-2">Latest Books</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-4 px-5 py-5 gap-4">
          {products.map((product,idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      )}
    </>
  );
};
export default HomeScreen;
