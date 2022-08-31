import React, { useEffect } from "react";

import { Navigate } from "react-router";

const User=()=> {
  const token = localStorage.getItem("UserToken");
   let logedIn = true;
    if (token == null) {
      logedIn = false;
    

  }
  useEffect(()=>{
    logedIn()
  })
  
    if (logedIn === false) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <hi>admin page</hi>
      </>
    );
  }


export default User;
