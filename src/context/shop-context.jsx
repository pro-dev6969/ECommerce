import  React , {createContext , useState} from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i=1 ; i<PRODUCTS.length+1 ; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (ItemId) => {
        setCartItems((prev) => ({...prev , [ItemId]: prev[ItemId]+1}));
    } 

    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({...prev , [ItemId]: prev[ItemId]-1}));
    }

    const updateCartValue = (newAmount , itemId) => {
        setCartItems((prev)=>({...prev , [itemId]: newAmount}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(let i in cartItems){
            if(cartItems[i]>0){
                let iteminfo = PRODUCTS.find((product) => product.id === Number(i));
                totalAmount += cartItems[i]*iteminfo.price ; 
            }
        }
    }

    const contextValue = { cartItems , addToCart , removeFromCart , updateCartValue , getTotalCartAmount};

    console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
} 