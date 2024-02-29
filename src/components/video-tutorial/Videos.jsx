import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Videos() {

  const[cookies, setCookies, removeCookies]=useCookies(['uname']);
  let navigate =useNavigate();
  useEffect(()=>{
    if(cookies.uname==null){
      navigate('/login')
    }
  },[])
  return (
    <div>
      <h3>Our Tutorial Videos - {cookies.uname}</h3>
      <iframe
        width="400"
        height="200"
        src="https://www.youtube.com/emded/scnY0YKVs9I"
      ></iframe>

    </div>
  );
}

export default Videos;
