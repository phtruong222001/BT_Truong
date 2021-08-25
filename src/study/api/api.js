
import React, { useEffect, useState } from 'react';

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

function Api() {
    // const listQuestion = [];
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const [list, setList] = useState([])
    
    const onClick = () =>{
        setList(data)
    }    

    const hadleValue = (e) => {
        setValue(e.target.value)
        
    }

    useEffect(()=>{
        fetch("https://api.trainery.live/v1/faqs", { 
            headers : {
                'Client-Id': '1',
                'Client-Secret': '3c3adab39aeb093935e870c35cc5746c',
            },
         })
        .then( (res) => res.json())
        .then( (result) =>{
            // console.log("result", result)
            const {data} = result
            // console.log("data", data)
            setData(data)
        } )
    },[])

    // console.log("api",data)

   

    useEffect(()=>{
        if(value.length > 0){
            const newList = []
            const search = value.toLocaleLowerCase()
            console.log("tim", search)
            for(let i =0 ; i < data.length; i++){
                // console.log(data[i].answer)
                let question = xoa_dau(data[i].question.toLocaleLowerCase()) ;
                let answer = xoa_dau(data[i].answer.toLocaleLowerCase());
                if (question.match(xoa_dau(search)) || answer.match(xoa_dau(search))   ){
                    console.log("cau hoi",question.match(xoa_dau(search)) )
                    newList.push( data[i] )
                }
            }
            if(newList.length === 0){
                
                setList([{question:"Không có kết quả"}])
            }else{
                setList(newList);
                 // console.log("new", newList.length);
            }
        }
        // console.log("leng ",newList.length)
    },[value])


    return (
        <>
            <h1> API </h1>
            <input type="text" onChange={hadleValue} onClick={onClick} value={value} />
            <ul>
                {list.map( post => (
                    <li key={post.id} > {post.question} <br /> { post.answer}</li>
                ))}
            </ul>
           
        </>
    )
}



export default Api
