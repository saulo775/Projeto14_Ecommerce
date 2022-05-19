import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import SignUp from "./pages/sign-up/index.jsx"
import SignIn from "./pages/sign-in/index.jsx";
import { ShoppingCart } from "./pages/Shopping-Cart/index.jsx"

import UserContext from "./assets/context/userContext";

function App() {
    const [token, setToken] = useState(null)
    
    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/shoppingCart' element={<ShoppingCart />} />
                    <Route path={"/products"} element={<Products />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;