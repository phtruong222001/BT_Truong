
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

Usefrom.propTypes = {
    Submit:PropTypes.func,
}

Usefrom.defaultProps = {
    Submit:null,
}

function Usefrom(props) {
    const {Submit} = props;
    const [value, setValue] = useState("");

    const handleValueChange = (e) =>{      // lấy giá trị
        console.log("value", e.target.value);
        setValue(e.target.value)
    }

    const hadleSubmit = (e) =>{
        e.preventDefault();
        if(!Submit) return;
        const formValues = {
            title : value,
        }
        Submit(formValues);
        setValue("")
    }

    return (
        <>
          <form onSubmit={hadleSubmit}>
              <input type="text" value={value}
                onChange={handleValueChange}
              ></input>
        </form>  
        </>
    )
}




export default Usefrom;
