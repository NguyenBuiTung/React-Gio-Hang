import React, { Component } from "react";

class SanPham extends Component {
  render() {
    const { prod, xemChiTiet, themGioHang } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={prod.hinhAnh}
            alt="Title"
            height={350}
            className="w-100"
            style={{ objectFit: "contain" }}
          />
          <div className="card-body">
            <h4 className="card-title">{prod.tenSP}</h4>
            <p className="card-text">{prod.giaBan.toLocaleString()} VND</p>
            <button
              className="btn btn-success me-2"
              onClick={() => {
                //callback funtion
                xemChiTiet(prod);
              }}
            >
              Xem Chi tiet
            </button>
            <button
              
              className="btn btn-success"
              onClick={() => {
                themGioHang(prod);
                // console.log(prod);
              }}
            >
              Thêm Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SanPham;
