// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { getProducts } from "../services/api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = getProducts();
    const selectedProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-detail-page">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Giá: {product.price.toLocaleString()} VNĐ</p>
      <button onClick={handleAddToCart}>Thêm vào giỏ</button>
    </div>
  );
};

export default ProductDetailPage;
