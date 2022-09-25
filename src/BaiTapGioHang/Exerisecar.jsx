import React, { Component } from 'react';
import Carlist from './Carlist';
import Modal from './Modal';
const products = [
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 3, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
    ];
class Exerisecar extends Component {
    state={
        srcImg:'./img/black-car.jpg',
        // products:{}
    }
    //state dat tren compunent thi setstate dat tren component do
    xemChiTiet=(carClick)=>{
        console.log(carClick)
        this.setState({
          srcImg:carClick.img
        })
    }
    render() {
        return (
            <div className='container'>
                <Modal imgCar={this.state.srcImg}/>
                <Carlist products={products} xemChiTiet={this.xemChiTiet}/>
            </div>
        );
    }
}

export default Exerisecar;