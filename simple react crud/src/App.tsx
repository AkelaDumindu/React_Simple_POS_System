import {BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Customer from "./components/Customer";
import Order from "./components/Order";
import Product from "./components/Product";

function App() {
 

  return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Wattpad-logo-vector.svg" alt="" className="logo"/>
      </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Customer"}>Customer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Order"}>Order Management</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true" to={"/Product"}>Products</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

          <hr />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Customer" element={<Customer/>} />
            <Route path="/Order" element={<Order/>} />
            <Route path="/Product" element={<Product/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
