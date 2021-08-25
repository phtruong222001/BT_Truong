  import { Input } from 'antd';
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';


  
  function Useeffect() {
    const [count , setCount] = useState(0);
    const [text, setText] = useState("")
    const [value, setValue] = useState("");

    const handleValue = (e) => {
        setValue(e.target.value);
        console.log( "value",  e.target.value);
       
    }
    // console.log("value length", value.length)

    let check = true;
    
    if(value.length > 5 ){
        check = false;
        // console.log("check1", check)
    }else{
        check = true;
    }
    

    useEffect(() =>{
        if(check == true){
            setText("");
            check = false;
        }else{
            console.log("da chay");
            setText("Qua 5 ki tu");
        }
        
    } ,[check])


      return (
          <> 
              <button onClick ={()=> { setCount(count+1) }} > CLick {count} </button>
               
                <Input onChange ={handleValue}  />
                <h1 style={{color:"red"}}> {text} </h1>  
              {/* <button onClick ={()=> { setAction('users') }} > GetUser {count} </button>
              <button onClick ={()=> { setAction('comments') }} > Cpmpone {count} </button> */}
              
          </>
      )
  }
  

  export default Useeffect
  