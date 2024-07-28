import { createContext , useEffect, useState} from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([]);

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))    // if cart is empty add item with count 1
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))    // if item is already in cart increment count
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))    // decrement count of item in cart
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Fetch food data from the database    
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    // Don't logout after refreshing 
    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;