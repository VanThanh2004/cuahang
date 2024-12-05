import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState(""); // Họ và tên
  const [email, setEmail] = useState(""); // Gmail
  const [phone, setPhone] = useState(""); // Số điện thoại
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  const handleLogin = (e) => {
    e.preventDefault();
    // Kiểm tra nếu tất cả thông tin hợp lệ
    if (name && email && phone) {
      alert("Đăng nhập thành công!");
      setIsLoggedIn(true);
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

  return (
    <div className="home-page">
      {/* Phần giới thiệu về cửa hàng */}
      <section className="intro-section">
        <h1>Chào Mừng Bạn Đến Với Cửa Hàng Con Yêu</h1>
        <p>
          Khám phá bộ sưu tập các sản phẩm sữa cho bé, đồ chơi sáng tạo và quần
          áo thời trang cho trẻ em.
        </p>
        <div className="categories">
          <div className="category">
            <h3>Sữa Cho Bé</h3>
            <p>Chọn mua sữa cho bé yêu của bạn với các thương hiệu hàng đầu.</p>
          </div>
          <div className="category">
            <h3>Đồ Chơi</h3>
            <p>Đồ chơi giúp phát triển trí tuệ và thể chất cho bé.</p>
          </div>
          <div className="category">
            <h3>Quần Áo</h3>
            <p>Quần áo dễ thương và thoải mái cho bé yêu của bạn.</p>
          </div>
        </div>
      </section>

      {/* Phần khám phá sản phẩm */}
      <section className="shop-now">
        <h2>Khám Phá Ngay</h2>
        <p>Hãy bắt đầu mua sắm ngay hôm nay và tận hưởng các ưu đãi hấp dẫn!</p>
        <Link to="/milk">
          <button>Mua Ngay Sữa Cho Bé</button>
        </Link>
        <Link to="/clothes">
          <button>Mua Ngay Quần Áo</button>
        </Link>
        <Link to="/toys">
          <button>Mua Ngay Đồ Chơi</button>
        </Link>
      </section>

      {/* Phần đăng nhập hoặc thông tin người dùng */}
      {!isLoggedIn ? (
        <section className="login-section">
          <h2>Đăng Nhập</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="name">Họ và Tên:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Gmail:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Số điện thoại:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit">Đăng Nhập</button>
          </form>
        </section>
      ) : (
        <section className="user-info">
          <h2>Thông Tin Người Dùng</h2>
          <p>
            <strong>Họ và Tên:</strong> {name}
          </p>
          <p>
            <strong>Gmail:</strong> {email}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {phone}
          </p>
        </section>
      )}
    </div>
  );
};

export default HomePage;
