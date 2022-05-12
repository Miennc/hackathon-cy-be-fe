import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                </Routes>
                {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
            </BrowserRouter>

        </div>
    )
}
