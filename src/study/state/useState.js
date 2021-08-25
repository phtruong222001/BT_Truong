import React from "react";
import { useState } from "react/cjs/react.development";


function UseState(){
    // const intiColor = localStorage.getItem("box_color") || 'deeppink' //loat kh luu gia tri  1

    // const [color,setColor] = useState(()=> {
    //     const intiColor = localStorage.getItem("box_color") || 'deeppink'
    //     console.log(intiColor);
    //     return intiColor
    // })                lưu vào local đúng lần đầu tiên

    // const [color, setColor] = useState('deeppink')
    // // const [color, setColor] = useState(intiColor) //lưu lại kho reloat   1
    // const onClick =()=>{
    //     const newColor = getRandomColor();
    //     setColor(newColor);
        
    //     // localStorage.setItem('box_color', newColor);  //lưu lại kho reloat  1
    //   }
    //   console.log(color)

    return (
        <div >
            <h1>UseState </h1> 
            <button  >Change Color </button>
        </div>
    )
}

export default UseState;

