// src/pages/ToysPage.js
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api"; // Lấy sản phẩm từ API
import ProductCard from "../components/ProductCard"; // Giả sử bạn có một component để hiển thị sản phẩm

const ToysPage = () => {
  const [toysProducts, setToysProducts] = useState([]);

  useEffect(() => {
    const products = getProducts(); // Lấy tất cả sản phẩm
    const filteredToysProducts = products.filter(
      (product) => product.category === "toys"
    );
    setToysProducts(filteredToysProducts); // Lưu vào state
  }, []);

  return (
    <div>
      <h2>Đồ Chơi Cho Bé</h2>
      <div className="product-list">
        {toysProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ToysPage;
