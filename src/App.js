import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './components/About';
import AddContent from './components/AddContent';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} >
        
          </Route>
          <Route path="/addContent" element={<AddContent />} >
        
          </Route>
       
        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>

    </div>
  )
}
