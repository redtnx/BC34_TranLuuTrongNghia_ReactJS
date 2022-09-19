import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { statePhone } = this.props;
    return (
      <div>
        <div className="row pt-4">
          <div className="col-5">
            <h3>{statePhone.tenSP}</h3>
            <img
              className="img-fluid"
              style={{ height: "300px" }}
              src={statePhone.hinhAnh}
              alt=""
            />
          </div>
          <div className="col-7">
            <h2>Thông số kĩ thuật</h2>
            <table className="table text-left">
              <tbody>
                <tr>
                  <td>Màn hình: </td>
                  <td>{statePhone.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành: </td>
                  <td>{statePhone.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước: </td>
                  <td>{statePhone.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau: </td>
                  <td>{statePhone.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM: </td>
                  <td>{statePhone.ram}</td>
                </tr>
                <tr>
                  <td>ROM: </td>
                  <td>{statePhone.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
