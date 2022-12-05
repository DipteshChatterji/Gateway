
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./component/ProductPage";
import {Success} from "./component/Success";
import Failed from "./component/Failed";



 

export default function App() {
  
return(
  <div className="App">
    
  <Router>
    <Routes>
      <Route index element={<ProductPage/>} />
      <Route path="success" element={<Success />} />
      <Route path="cancel" element={<Failed/>} />
    </Routes>
  </Router>
  </div>
  );
}