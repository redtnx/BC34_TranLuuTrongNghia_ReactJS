import React, { Component } from "react";
import dataFilm from "./DataFilms.json";

export default class Movie extends Component {
  state = {
    movieDetail: {
      maPhim: 1283,
      tenPhim: "Trainwreck",
      biDanh: "trainwreck",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      moTa: "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
  };

  render() {
    let { movieDetail } = this.state;

    return (
      <div className="row">
        <div className="row col-md-12 card" style={{ width: 400 }}>
          <div class="col-md-6">
            <img
              style={{ width: 200 }}
              className="img-fluid card-img-top"
              src={movieDetail.hinhAnh}
              alt="Card image"
            />
          </div>
          <div className="col-6 card-body">
            <h4 className="card-title">{movieDetail.tenPhim}</h4>
            <p className="card-text">{movieDetail.moTa}</p>
            <p className="card-text">
              Ngày Khởi Chiếu: {movieDetail.ngayKhoiChieu}
            </p>
            <p className="card-text">Đánh giá: {movieDetail.danhGia}</p>
            <iframe src={movieDetail.trailer} frameborder="0"></iframe>
          </div>
        </div>

        {dataFilm.map((movie, index) => {
          return (
            <div
              key={index}
              className="col-md-2 m-4 card"
              style={{ width: 400 }}
            >
              <img
                className="card-img-top"
                src={movie.hinhAnh}
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">{movie.tenPhim}</h4>
                <p className="card-text">{movie.moTa}</p>
              </div>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.setState({
                    movieDetail: movie,
                  });
                }}
              >
                Detail
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
