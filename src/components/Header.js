import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Để lấy dữ liệu giỏ hàng từ Redux
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Lấy danh sách các sản phẩm trong giỏ hàng từ Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header-container">
      <h1>
        <Link to="/" style={{ color: "#1e3a8a", textDecoration: "none" }}>
          Cửa Hàng Con Yêu
        </Link>
      </h1>
      <nav>
        <Link to="/">Trang Chủ</Link>
        <Link to="/shop">Cửa Hàng</Link>
        <Link to="/milk">Sữa Cho Bé</Link>
        <Link to="/clothes">Quần Áo</Link>
        <Link to="/toys">Đồ Chơi</Link>
        <div
          className="cart-link-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Link to="/cart" style={{ display: "flex", alignItems: "center" }}>
            {/* Biểu tượng giỏ hàng */}
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ marginRight: "5px" }}
            />
            Giỏ Hàng
            {/* Hiển thị badge số lượng giỏ hàng nếu có sản phẩm */}
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
