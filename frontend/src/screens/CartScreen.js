import { useEffect } from "react"
import {useParams,useSearchParams,useNavigate} from 'react-router-dom'
import { addToCart,removeFromCart } from "../actions/cartActions"
import {useDispatch,useSelector} from 'react-redux'
import {IoTrashBinSharp} from "react-icons/io5"

const CartScreen=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [searchParams]=useSearchParams()

    const {id:productId}=useParams()
    let qty=searchParams.get('qty')

    const cart=useSelector((state)=>state.cart)
    const {cartItems}=cart;

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(+qty,productId))
        }
    },[dispatch,productId,qty])

    const removeFromCartHandler=(id)=>{
        dispatch(removeFromCart(id))
    }

    return(
        <div>
            <div>
                {cartItems.length===0 ? (
                    <p>Your Cart is Empty</p>
                ):(
                    <div className="grid grid-cols-2 gap-40">
                        <div className="flex flex-col">
                            {cartItems.map((item)=>(
                                <div className="flex text-center justify-between p-5">
                                    <img src={item.image} alt={item.name} className="w-32 h-32 pl-5"/>
                                    <h1 className="pt-14 ">{item.name}</h1>
                                    <h2 className="pt-14">₹{item.price}</h2>
                                    <select value={item.qty}
                                    onChange={(e)=>dispatch(addToCart(+e.target.value,item.product))}>
                                        {[...Array(item.countInStock).keys()].map((i)=>(
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        ))}
                                    </select>

                                    <button className="mt-7" onClick={()=>removeFromCartHandler(item.product)}>{<IoTrashBinSharp style={{color:'red',fontSize:'20px'}}/>}</button>
                                </div>
                                
                            ))}
                        </div>
                        
                        <div className="text-center">
                            <div className="flex flex-col text-center">
                                <h1 className="text-3xl font-bold pt-10 pb-4">Subtotal ({cartItems.reduce((acc,currval)=>acc+currval.qty,0)}{' '}items)</h1>
                                <h2 className="text-2xl font-bold text-red-600 py-4">Total Price : ₹{cartItems.reduce((acc,currval)=>acc+currval.qty*currval.price,0)}</h2>
                                <button className="bg-sky-500/100 text-white hover:bg-red-500 font-bold py-2 px-4 rounded mr-12 ml-14">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}
export default CartScreen