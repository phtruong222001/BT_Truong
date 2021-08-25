import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.development'



function Login() { 
    let history = useHistory()
    const [txt, setTxt] = useState("")
    const [inputValues, setInputValues] = useState({
        phone: '', password: ''
      });

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
      };

    const fetchData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Client-Id", "1");
        myHeaders.append("Client-Secret", "3c3adab39aeb093935e870c35cc5746c");

        var formdata = new FormData();
        formdata.append("phone",inputValues.phone);
        formdata.append("password",inputValues.password);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://api.trainery.live/v1/trainer/login", requestOptions)
        .then(response => response.json())
        .then(result =>  {console.log(result)
            console.log("token", result.access_token)
            if(result.access_token){
                alert("Thanh cong")
                localStorage.setItem("access_token", result.access_token)
                history.push("/home")      
            }else{
                setTxt("Tai khoan hoac mat khau khong dung")
            }
        })
        .catch(error => console.log('error ', error));
    }

    const login =() =>{
        fetchData();
    }

    return (
        <>
            <form  >
                <input type="text" placeholder ="phone" onChange={handleOnChange}  name="phone" /> <br/>
                <input type="password" placeholder ="password" onChange={handleOnChange}  name="password" /> <br/>
                <p> {txt} </p>
                <button type="button" onClick={login} > Login </button>
            </form>
        </>
    )
}



export default Login
