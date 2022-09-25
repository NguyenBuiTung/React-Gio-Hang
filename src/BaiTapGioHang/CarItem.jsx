import React, { Component } from "react";

class CarItem extends Component {
  render() {
    const { products,xemChiTiet } = this.props;
    // console.log(products.img);
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={products.img} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{products.name}</h4>
            <p className="card-text">{products.price}</p>
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
              onClick={() => {
                xemChiTiet(products);
              }}
            >
              Xem chi tiet
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarItem;
