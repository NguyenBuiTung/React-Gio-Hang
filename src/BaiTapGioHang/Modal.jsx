import React, { Component } from "react";

class Modal extends Component {
  renderGioHang = () => {
    const { gioHang, delIphone, tangGiam } = this.props;
    return gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img src={item.hinhAnh} alt="" width={60} height={70} />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                tangGiam(item, true);
              }}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn btn-success"
              onClick={() => {
                tangGiam(item, false);
              }}
            >
              -
            </button>
          </td>
          <td>{(item.giaBan).toLocaleString()}</td>
          <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                delIphone(item);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Giỏ Hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <thead className="table text-center">
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody className="text-center">{this.renderGioHang()}</tbody>
                <tfoot className="text-center">
                  <tr>
                    <th>Thanh Toán</th>
                    <td>
                      {this.props.gioHang.reduce((tongtien, spGH, index) => {
                        return (tongtien += spGH.soLuong * spGH.giaBan)
                      }, 0).toLocaleString()} VND
                    </td>
                  </tr>
                </tfoot>
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>
    );
  }
}

export default Modal;
