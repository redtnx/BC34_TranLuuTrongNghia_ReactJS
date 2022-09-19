import React, { Component } from 'react'


export default class DemoState extends Component {

    // Đối tượng mặc định được tạo từ lớp đối tượng Component của React
    state = {
        spNumber: 0 // thuộc tính của đối tượng state
    }

  render() {

    return (

      <div>
        {/* <h1>
        {this.state.spNumber}

        </h1>
        <br/>
        <button onClick={()=>{

            // Hàm load lại hàm render()
            // Gán lại giá trị cho đối tượng state
            this.setState({
                spNumber:2
            })

        }}>Thay đổi</button> */}

        <button onClick={()=>{
            let spNumberNew = this.state.spNumber
            this.setState({
                spNumber: spNumberNew-1
            })
        }}>Giảm</button>


        <h1>{this.state.spNumber}</h1>


        <button onClick={()=>{
            let spNumberNew = this.state.spNumber
            this.setState({
                spNumber: spNumberNew+1
            })
        }}>Tăng</button>

      </div>
    )
  }
}
