import React, { Component } from "react";

export default class DanhSachSP extends Component {
  render() {
    let { dataPhoneProps, handleChiTiet, themGioHang } = this.props;
    return (
      <div className="row">
        {dataPhoneProps.map((phone, index) => {
          return (
            <div key={index} className="col-4">
              <img
                className="img-fluid"
                style={{ height: "400px" }}
                src={phone.hinhAnh}
              />
              <h3>{phone.tenSP}</h3>

              <button
                className="btn btn-success"
                onClick={() => handleChiTiet(phone)}
              >
                Xem chi tiết
              </button>

              <button
                className="btn btn-info ml-2"
                onClick={() => themGioHang(phone)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
