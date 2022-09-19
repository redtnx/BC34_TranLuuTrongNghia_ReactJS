import React, { Component } from 'react';
import ContentComponent from '../demo_layout/ContentComponent';
import FooterComponent from '../demo_layout/FooterComponent';
import './demo.css';
import image_react from './react_img.png';

export default class DemoComponent extends Component {

    //method
    // Cách 2: binding dữ liệu bằng hàm
    hienThiThongTin = ()=>{
        // const arrayDS = [{
        //     id: 1, 
        //     hoTen: "Nguyễn Văn A"
        // },
        // {
        //     id:2, 
        //     hoTen: "Trần Văn B"
        // }]

        // return arrayDS. map(item => {

        //     const title = "hello"

        //     const dieuKien = true

        //     if(dieuKien==true){
        //         return <ContentComponent/>
        //     } else {
        //         return <FooterComponent/>
        //     }

        //     return <h1>{`${title} ${item.hoTen}`}</h1>

        // })

        let dataHtml =""

        for(let index = 0; index<10; index++){
                dataHtml += "<h1> Hello </h1>"
        }

        return dataHtml
    }

    getValue = (value) => {
        const a = value;
        const b = a + 1;
        console.log(b)
    }


    render() {

        // const style = { textAlign: 'center', fontSize: '100px', color: 'blue' }

        const hello = 'Hello React';

        const getTitle = (tieuDe) => {
            alert(tieuDe);
        }


        const arrDS = [{
            id: 1, 
            hoTen: "Nguyễn Văn A"
        },
        {
            id:2, 
            hoTen: "Trần Văn B"
        }]



        return (
            <div>
                {/* document.querySelector().style.textAlign  */}
                {/* <h1 id="demo" className="demo_style text-danger" >Hello React</h1> */}
                {/* lấy từ folder pubilc, đi từ file index.html */}
                {/* <img src='./react.png' /> */}

                {/* lấy từ thư mục src, phải bỏ hình vào thư mục src mới import sử dụng được */}
                {/* <img src={image_react} /> */}

                {/* <button onClick={() => getTitle("Cybersoft")}>Click</button>

                <input onChange={(event) => this.getValue(event.target.value)} /> */}

                {/* Cách 1: binding trực tiếp tại code html */}

                {/* {
                    arrayDS.map(item => {

                        const title = "hello"

                        return <h1>{`${title} ${item.hoTen}`}</h1>
                    })
                } */}

                {this.hienThiThongTin()}
            </div>
        )
    }
}
