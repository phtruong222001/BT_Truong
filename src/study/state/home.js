
import './home.css';
import { useState } from 'react/cjs/react.development';
import BackgroundLogin from "./bgLogin.png";
import { Image  } from "antd";
import { Button,Input } from 'antd';
import 'antd/dist/antd.css';
import { useEffect } from 'react';


function Home() {
  // const box =["50%","25%", "12.5%" ,"6.25%"];
  const [styleBox, setStyleBox] = useState(
    {
      width:"100%",
      height:"100%",
    }
  )

  const [click, setClick] = useState(1);

  // const onClick = () => {
  //   if(click < box.length){
  //     console.log("click" ,  click);
  //     setClick(() =>{
  //       let newStyle = box[click];
  //       setStyleBox({
  //         width :newStyle,
  //         height: newStyle,
  //       })
  //       return (click +1 )
  //     } );
  //   }
  //  }

   const onClick = () => {
      console.log("click" ,  click);
      setClick(() =>{
        let newStyle = 100*(1/(Math.pow(2, click))) + "%";
        console.log("sd *" , newStyle, typeof newStyle);
        setStyleBox({
          width :newStyle,
          height: newStyle,
        })
        return (click +1 )
      } );
    
   }


  
   console.log("style", styleBox)
  
 
  const onClickDefault =()=>{
    setStyleBox({ 
      width:"100%",
      height:"100%",
      })
    setClick(1);
  }

  const [value, setValue] = useState("");
  const [text, setText] = useState("")


  const handleValue = (e) =>{     
    console.log("value", e.target.value);
    setValue(e.target.value)
   }

   let check = true;
   if(value.length > 5){
      check = false;
   }else{
     check =true;
   }

   useEffect(()=> {
     if(check == true){
       setText("");
       check = false;
     }else{
        setText("Da qua 5 ki tu");
     }
   },[check])

  return (
    <div className="container" >
        <div className="box-1">
          <Image src={BackgroundLogin} 
          className="img-trainer"
          style={styleBox }
          preview={false}  />      
        </div>
        <div className ="box-2" >
            <p> Click {click} </p>
            <Button type="primary" onClick={onClick} > Change </Button>
            <Button onClick ={onClickDefault} >Default </Button>
            <input value={value} onChange= {handleValue}  />
            <p style={{color:"Red"}}> {text}  </p>
        </div>
    </div>
  );
}

export default Home;
