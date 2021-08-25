import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import cancel from '../../../images/cancel.svg';
import './fruits.css';

function xoa_dau(str) {
    str = str.replace(/\s+/g, ' ');
    str = str.trim();
     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
     str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
     str = str.replace(/đ/g, "d");
     str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
     str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
     str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
     str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
     str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
     str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
     str = str.replace(/Đ/g, "D");
     return str;
 }

function Fruits() {
    const fruits = ["Táo","Chuối", "Cam", "Na", "Xoàn" , "Nhãn", "Lê","Mít","Sầu Riêng","Nho",
     "Chôm Chôm","Vải","Mận","Dưa Hấu","Bưởi","Ổi","Khế ","Lựu", "Chanh","Dừa",
     "Hồng","Dâu","Bơ","Đào","Đu Đủ","Mơ","Me","Nhót","Sung"]
    const [value, setValue] = useState("")
    const [listFruits, setList] = useState([""])
    const newList = [];

    const onDelete = () => {
        setList(fruits);
        setValue("") ;
    }

    const handleValue = (e)=>{
        setValue(e.target.value);
        // console.log(value)
    }

    const onClick = () =>{
            setList(fruits);
        }

    useEffect(()=>{
        // console.log("length", value.length)
        if(value.length > 0){
            for (let i = 0; i < fruits.length; i++) {
                let fruit = xoa_dau(fruits[i].toLocaleLowerCase()) ;
                //  console.log("hhehehe",fruits[i],typeof fruits[i] )
                 if(fruit.match(value.toLocaleLowerCase()) && value.length > 0 
                 || fruits[i].toLocaleLowerCase().match(value.toLocaleLowerCase())){
                    newList.push(fruits[i])
                }
              }
            if(newList.length == 0){
                setList(["Không có kết quả"])
            }else{
                setList(newList);
                 // console.log("new", newList.length);
            }
        }
     },[value])

    const requestOptions = {
        headers: { 
            'Client-Id': '1',
            'Client-Secret': '3c3adab39aeb093935e870c35cc5746c',
        },
    };

    const [api, setApi]=useState([])

     useEffect(()=>{
         fetch("https://api.trainery.live/v1/faqs", requestOptions)
         .then(res => res.json())
         .then( r =>{ console.log("api" ,r, typeof r);
            console.log("chay api");
            setApi(r);

         }) 
     },[])

    console.log("api2", api.length)
    console.log("apidata", api.data.length)
    console.log("hoa qua", fruits, typeof fruits)
    // const list=[];
    // for (let i ; i < api.data.length ; i++){
    //     console.log("leng", api.data.length)
    // }

    return (
        <>
            <div className="input">
                <input  onChange={handleValue} onClick={onClick} value={value} />
                <label onClick={onDelete} className="close" > <img src={cancel}/></label>
            </div>
            
           {fruits}
           

            <ul>
            {listFruits.map(fruit => ( 
                   
                    <li key={fruit}>
                        
                        {fruit}
                    </li>
                 ))}
            </ul>
                
            
        </>
    )
}


export default Fruits
