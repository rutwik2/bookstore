import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import {useNavigate,useParams} from "react-router-dom"
import { listProductDetail } from "../actions/productActions"
const ProductScreen=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {id}=useParams()

    const productDetail=useSelector((state)=>state.productDetail)
    const {loading,error,product}=productDetail
    

    useEffect(()=>{
        
        dispatch(listProductDetail(id))
    },[dispatch,id])

    return(
        <div>
            <img src={product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h1>{product.author}</h1>
            <h2>{product.price}</h2>
        </div>
    )

}
export default ProductScreen