import React, { Component } from "react";
import SanPham from "./SanPham";
import Modal from "./Modal";
import "../assets/index.css";
const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

class BaiTapGIoHang extends Component {
  state = {
    spChitiet: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
      },
    ],
    gioHang: [],
  };
  renderproduct = () => {
    return dataPhone.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            prod={prod}
            xemChiTiet={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });
  };
  xemChiTiet = (prodClick) => {
    // console.log(prodClick)
    this.setState({
      spChitiet: prodClick,
    });
  };
  themGioHang = (idclick) => {
    // console.log(idclick);
    let newGioHang = {
      maSP: idclick.maSP,
      tenSP: idclick.tenSP,
      soLuong: 1,
      giaBan: idclick.giaBan,
      hinhAnh: idclick.hinhAnh,
    };
    // console.log(newGioHang);
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === newGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(newGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  delIphone = (idclick) => {
    // console.log(idclick);
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === idclick.maSP);
    gioHangCapNhat.splice(index, 1);
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  tangGiam = (masp, tanggiam) => {
    console.log(tanggiam);
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === masp.maSP);
    if (tanggiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let {
      // maSP,
      // tenSP,
      hinhAnh,
      manHinh,
      ram,
      rom,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      // giaBan,
    } = this.state.spChitiet;
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h1 className="text-center text-success mb-4">Bài Tập Giỏ Hàng</h1>
        <Modal
          gioHang={this.state.gioHang}
          delIphone={this.delIphone}
          tangGiam={this.tangGiam}
        />
        <h2
          className="text-end"
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Giỏ Hàng({tongSoLuong})
        </h2>
        <div className="row">{this.renderproduct()}</div>
        <div className="mt-3">
          <div className="row">
            <div className="col-4">
              <h3>Iphone</h3>
              <img src={hinhAnh} alt="" className="w-100" />
            </div>
            <div className="col-8">
              <h3>Thông tin chi tiết</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn Hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Cam trước</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Cam sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapGIoHang;
