import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{ useState } from "react";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import SignUp from "./pages/sign-up/index.jsx"
import SignIn from "./pages/sign-in/index.jsx";
import { ShoppingCart } from "./pages/Shopping-Cart/index.jsx"

import UserContext from "./assets/context/userContext";
import Checkout from "./pages/Checkout";

function App() {
    const [token, setToken] = useState(null);
    const [cartData, setCartData] = useState({})
    return (
        <UserContext.Provider value={{token, setToken, cartData, setCartData}}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/shoppingCart' element={<ShoppingCart />} />
                    <Route path={"/products"} element={<Products />} />
                    <Route path={"/checkout"} element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;