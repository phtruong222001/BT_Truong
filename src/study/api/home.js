import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react/cjs/react.development';


function Home(){
    const [name, setName]=useState("")
    let history = useHistory();
    const logout =() =>{
        history.push("/")
        localStorage.removeItem("access_token")   
    }
    console.log("token", localStorage.getItem("access_token"))
    console.log(`Bearer ${localStorage.getItem("access_token")}`)

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Client-Id", "1");
        myHeaders.append("Client-Secret", "3c3adab39aeb093935e870c35cc5746c");
        myHeaders.append("Authorization",`Bearer ${localStorage.getItem("access_token")}`);
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        fetch("https://dev-api.trainery.live/v1/customer", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
            const {data} = result
            setName(data.fullname)
            console.log("name" , data.fullname)
        })
        
        
        .catch(error => console.log('error', error));
            },[])

    return(
        <  >
            <h1> Welcome {name}  </h1>

            <Button onClick={logout}> Logout  </Button>
        </>
    )
}

export default Home
