import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Phần Header giữ nguyên như cũ

// Các trang của bạn
import HomePage from "./pages/HomePage"; // Trang chủ
import ShopPage from "./pages/ShopPage"; // Trang cửa hàng
import MilkPage from "./pages/MilkPage"; // Trang sữa cho bé
import ClothesPage from "./pages/ClothesPage"; // Trang quần áo
import ToysPage from "./pages/ToysPage"; // Trang đồ chơi
import CartPage from "./pages/CartPage"; // Trang giỏ hàng

function App() {
  return (
    <Router>
      {/* Header sẽ được hiển thị trên tất cả các trang */}
      <Header />
      <Routes>
        {/* Đảm bảo rằng trang chủ sẽ hiển thị đúng */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/milk" element={<MilkPage />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/toys" element={<ToysPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
