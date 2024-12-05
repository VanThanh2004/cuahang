// src/pages/MilkPage.js
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api"; // Lấy sản phẩm từ API
import ProductCard from "../components/ProductCard"; // Giả sử bạn có một component để hiển thị sản phẩm

const MilkPage = () => {
  const [milkProducts, setMilkProducts] = useState([]);

  useEffect(() => {
    const products = getProducts(); // Lấy tất cả sản phẩm
    const filteredMilkProducts = products.filter(
      (product) => product.category === "milk"
    );
    setMilkProducts(filteredMilkProducts); // Lưu vào state
  }, []);

  return (
    <div>
      <h2>Sữa Cho Bé</h2>
      <div className="product-list">
        {milkProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MilkPage;
