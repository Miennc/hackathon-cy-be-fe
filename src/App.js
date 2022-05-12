import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Popup from "./components/Popup";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
                </Routes>
                {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
            </BrowserRouter>

        </div>
    )
}
