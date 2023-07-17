import { React , useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import {CartItem} from './cart-item';
import {useNavigate} from 'react-router-dom';
import './cart.css';


export const Cart = () => {
    const {cartItems , getTotalCartAmount} = useContext(ShopContext);
    
    const navigate = useNavigate();
    
    const totalAmount = getTotalCartAmount();

    return(
        <div className="cart">
            <div>
                <h1> Your Cart Item </h1>
            </div>
            <div className="cart">
                 {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return <CartItem data={product} />
                    }
                 })}
            </div>
            {totalAmount>0?(
                <div className="checkout">
                <p> Subtotal: $(totalAmount)</p>
                <button onClick={()=>navigate("/")}> Continue Shopping</button>
                <button> Checkout </button>
                </div>
            ):(
                <h1>Your Cart Is Empty</h1>
            )}
            
        </div>
    );
}