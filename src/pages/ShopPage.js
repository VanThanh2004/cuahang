import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { setProducts, setSearchQuery } from "../redux/productSlice";
import { getProducts } from "../services/api";

// Import logo từ thư mục src/assets/images/
import logo from "../assets/images/logo.png";

const ShopPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const [searchInput, setSearchInput] = useState(searchQuery);

  useEffect(() => {
    const productsData = getProducts();
    dispatch(setProducts(productsData));
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchInput));
  };

  const handleClearSearch = () => {
    setSearchInput("");
    dispatch(setSearchQuery(""));
    navigate("/shop");
  };

  return (
    <div className="shop-page">
      {/* Header với logo và thanh tìm kiếm */}
      <div style={headerContainerStyle}>
        <div style={logoContainerStyle}>
          <img src={logo} alt="Shop Logo" style={logoStyle} />
        </div>
        <div style={searchContainerStyle}>
          <form onSubmit={handleSearchSubmit} style={searchFormStyle}>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="Tìm kiếm sản phẩm..."
              style={searchInputStyle}
            />
            <button type="submit" style={searchButtonStyle}>
              Tìm kiếm
            </button>
          </form>
          {searchInput && (
            <button onClick={handleClearSearch} style={clearButtonStyle}>
              Xóa
            </button>
          )}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Không tìm thấy sản phẩm nào.</p>
        )}
      </div>

      {/* Footer với thông tin liên hệ */}
      <footer style={footerContainerStyle}>
        <div style={footerContactInfoStyle}>
          <p style={footerTextStyle}>Thông Tin Liên Hệ:</p>
          <p style={footerTextStyle}>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/VanThanh2004"
              target="_blank"
              rel="noopener noreferrer"
              style={footerLinkStyle}
            >
              GitHub
            </a>
          </p>
          <p style={footerTextStyle}>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61559789761111&mibextid=JRoKGi"
              target="_blank"
              rel="noopener noreferrer"
              style={footerLinkStyle}
            >
              Facebook Page
            </a>
          </p>
          <p style={footerTextStyle}>
            <strong>Số điện thoại:</strong> 0123456789
          </p>
        </div>
      </footer>
    </div>
  );
};

// Các style cho các phần tử
const headerContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  padding: "10px 20px",
  borderBottom: "1px solid #ddd",
};

const logoContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logoStyle = {
  height: "90px", // Chiều cao của logo
  maxWidth: "100%", // Đảm bảo logo không vượt quá chiều rộng của container
};

const searchContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

const searchFormStyle = {
  display: "flex",
  alignItems: "center",
};

const searchInputStyle = {
  padding: "8px 15px",
  fontSize: "16px",
  border: "1px solid #555",
  borderRadius: "5px",
  marginRight: "10px",
  width: "250px", // Cố định kích thước input cho các màn hình lớn
};

const searchButtonStyle = {
  padding: "11px 20px", // Kích thước nút giống nhau
  fontSize: "11px", // Cỡ chữ giống nhau
  backgroundColor: "#555", // Màu nền nút "Tìm kiếm"
  color: "white",
  fontWeight: "bold",
  borderRadius: "0.5", // Hình dạng vuông
  transition: "background-color 0.3s", // Hiệu ứng chuyển màu
  marginRight: "10px", // Khoảng cách giữa nút Tìm kiếm và Xóa
};

const clearButtonStyle = {
  padding: "11px 20px", // Kích thước nút giống nhau
  fontSize: "11px", // Cỡ chữ giống nhau
  backgroundColor: "#e74c3c", // Màu nền nút "Xóa"
  color: "white",
  fontWeight: "bold",
  borderRadius: "50%", // Bo tròn hoàn toàn nút "Xóa"
  transition: "background-color 0.3s", // Hiệu ứng chuyển màu
};

const footerContainerStyle = {
  backgroundColor: "#f8f8f8",
  padding: "20px 0",
  textAlign: "center",
  borderTop: "1px solid #ddd",
};

const footerContactInfoStyle = {
  textAlign: "left", // Căn trái cho phần thông tin liên hệ
  maxWidth: "600px",
  margin: "0 auto", // Căn giữa
  backgroundColor: "#f0f0f0", // Nền xám nhạt cho thông tin liên hệ
  padding: "10px", // Thêm khoảng cách nội bộ cho đẹp mắt
  borderRadius: "5px", // Tạo góc bo tròn cho phần thông tin liên hệ
};

const footerTextStyle = {
  fontSize: "14px", // Cỡ chữ nhỏ cho thông tin liên hệ
  color: "#555", // Màu sắc của văn bản
  marginBottom: "8px", // Khoảng cách giữa các dòng
};

const footerLinkStyle = {
  color: "#0066cc", // Màu sắc của các liên kết
  textDecoration: "none", // Bỏ gạch chân
};

export default ShopPage;
