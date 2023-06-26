import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">Ana sehife</Link>
        <Link to="/products/mobil-telefonlar">Telefonlar</Link>
        <Link to="/products/aksesuarlar">Aksesuarlar</Link>
      </nav>
      <h3>ok</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
