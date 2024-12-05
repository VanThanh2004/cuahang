// src/pages/ClothesPage.js
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api"; // Lấy sản phẩm từ API
import ProductCard from "../components/ProductCard"; // Giả sử bạn có một component để hiển thị sản phẩm

const ClothesPage = () => {
  const [clothesProducts, setClothesProducts] = useState([]);

  useEffect(() => {
    const products = getProducts(); // Lấy tất cả sản phẩm
    const filteredClothesProducts = products.filter(
      (product) => product.category === "clothes"
    );
    setClothesProducts(filteredClothesProducts); // Lưu vào state
  }, []);

  return (
    <div>
      <h2>Quần Áo Cho Bé</h2>
      <div className="product-list">
        {clothesProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ClothesPage;
