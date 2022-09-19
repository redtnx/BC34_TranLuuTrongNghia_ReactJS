import React, { Component } from "react";
import DanhSachSP from "./DanhSachSP";
import dataPhone from "./dataPhone.json";
import SanPham from "./SanPham";

export default class TrangChuSP extends Component {
  state = {
    statePhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./imgPhone/vsphone.jpg",
    },
    gioHang: [
      {
        maSP: 1,
        hinhAnh: "./imgPhone/vsphone.jpg",
        tenSP: "VinSmart Live",
        soLuong: 1,
        giaBan: 5700000,
      },
    ],
  };

  handleChiTiet = (phone) => {
    this.setState({
      statePhone: phone,
    });
  };

  thongTinGioHang = () => {
    let { gioHang } = this.state;
    let soLuongSP = gioHang.length;

    let tongTien = 0;

    gioHang.map((sanPham) => {
      tongTien += sanPham.soLuong * sanPham.giaBan;
    });

    // tongTien = gioHang.reduce((tong, sanPham) => {
    //   return (tong = sanPham.soLuong * sanPham.giaBan);
    // });

    return `(${soLuongSP} - ${tongTien.toLocaleString()}VND)`;
  };

  themGioHang = (sanPham) => {
    let { gioHang } = this.state;

    let gioHangNew = [...gioHang];

    let sanPhamGH = gioHangNew.find((item) => item.maSP == sanPham.maSP);

    if (sanPhamGH) {
      // Đã có trong giỏ hàng
    } else {
      // Chưa có trong giỏ hàng
      let sanPhamThem = { ...sanPham, soLuong: 1 };
      gioHangNew.push(sanPhamThem);
      //   gioHangNew = [...gioHangNew, sanPham]; ES6
    }
    this.setState({
      gioHang: gioHangNew,
    });
  };

  render() {
    let { statePhone, gioHang } = this.state;

    return (
      <div className="">
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Giỏ hàng {this.thongTinGioHang()}
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((sanPham) => {
                        return (
                          <tr>
                            <td>{sanPham.maSP}</td>
                            <td>
                              <img
                                className="img-fluid"
                                style={{ height: "50px" }}
                                src={sanPham.hinhAnh}
                                alt=""
                              />
                            </td>
                            <td>{sanPham.tenSP}</td>
                            <td>
                              <button>-</button>
                              {sanPham.soLuong}
                              <button>+</button>
                            </td>
                            <td>{sanPham.giaBan}</td>
                            <td>{sanPham.giaBan * sanPham.soLuong} VND</td>
                            <td>
                              <button className="btn btn-danger">Xóa</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DanhSachSP
          dataPhoneProps={dataPhone}
          handleChiTiet={this.handleChiTiet}
          themGioHang={this.themGioHang}
        />

        <SanPham statePhone={statePhone} />
      </div>
    );
  }
}
