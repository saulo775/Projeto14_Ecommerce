import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import SignUp from "./pages/sign-up/index.jsx"
import SignIn from "./pages/sign-in/index.jsx";
import ShoppingCart from "./pages/Shopping-Cart";

function App() {
    
    return (      
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/shoppingcart' element={<ShoppingCart />} />
                <Route path={"/products"} element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;