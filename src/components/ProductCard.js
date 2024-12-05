// src/components/ProductCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Giá: {product.price.toLocaleString()} VNĐ</p>
      <button onClick={handleAddToCart}>Thêm vào giỏ</button>
    </div>
  );
};

export default ProductCard;
