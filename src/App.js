import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./components/sign-up/index.jsx"
import SignIn from "./components/sign-in/index.jsx";

function App() {
    
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;