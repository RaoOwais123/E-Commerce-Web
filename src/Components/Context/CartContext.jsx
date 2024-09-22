import { createContext, useEffect, useState } from "react";
import { json } from "react-router";





export const CartContext = createContext();

function CartContextProvider({children}){

    const [CartItems, setCartItems] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        const Items = localStorage.getItem("cartItems");
        if (Items) {
            setCartItems([...JSON.parse(Items)]);
            
        }
        setLoad(false);

    },[]);

    useEffect(()=>{
        if (!load) {
            localStorage.setItem("cartItems", JSON.stringify(CartItems))
            
        }
    },[CartItems])

function AddToCart(item){
    const arr= [...CartItems]
    const ItemIndex = arr.findIndex((data)=> data.id == item.id);
    if (ItemIndex == -1) {
        arr.push({...item, quantity: 1});
        
    }
    else{
        arr[ItemIndex].quantity++;
    }
    setCartItems([...arr]);
};

function UpdateCart(id, type){
    const arr= [...CartItems]
    const ItemIndex = arr.findIndex((data)=> data.id == id);
    if (type == "plus") {
        arr[ItemIndex].quantity++;
        
    }
    else{
        arr[ItemIndex].quantity--;
    }
    setCartItems([...arr]);
};

function RemoveCart(id){
    const arr= [...CartItems]
    const ItemIndex = arr.findIndex((data)=> data.id == id);
    arr.splice(ItemIndex, 1)
    setCartItems([...arr]);
};

function clearCart(id) {
    setCartItems([]);
  }

function isItemAdded(id){
    const arr= [...CartItems]
    const ItemIndex = arr.findIndex((data)=> data.id == id);
    if (ItemIndex == -1) {
        return null;
        
    }
    else{
        return arr[ItemIndex];
    }

};
    return(
        <CartContext.Provider
        value={{CartItems, AddToCart, UpdateCart, RemoveCart, isItemAdded, clearCart}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;