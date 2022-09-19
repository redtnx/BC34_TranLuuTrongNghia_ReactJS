import React, { Component } from 'react'

export default class CarBasic extends Component {

    state = {
        urlHinhAnh:"black-car.jpg"
    }

  render() {


    return (

      <div>
        <div className='container row'>
            <div className='col-8'>
                <img className='img-fluid' src={`./CarBasic/products/${this.state.urlHinhAnh}` }/>
            </div>
            <div className='col-4'>
                <img onClick={()=>{
                    this.setState({
                        urlHinhAnh: "black-car.jpg"
                    })
                }} src="./CarBasic/icons/icon-black.jpg"/>

                <img onClick={()=>{
                    this.setState({
                        urlHinhAnh: "red-car.jpg"
                    })
                }} src="./CarBasic/icons/icon-red.jpg"/>

                <img onClick={()=>{
                    this.setState({
                        urlHinhAnh: "silver-car.jpg"
                    })
                }} src="./CarBasic/icons/icon-silver.jpg"/>

                <img onClick={()=>{
                    this.setState({
                        urlHinhAnh: "steel-car.jpg"
                    })
                }} src="./CarBasic/icons/icon-steel.jpg"/>

            </div>
        </div>
      </div>
    )
  }
}
