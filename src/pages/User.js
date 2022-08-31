import React from "react";

import { Navigate } from "react-router";

const User=()=> {
  const token = localStorage.getItem("UserToken");
   let logedIn = true;
    if (token == null) {
      logedIn = false;
    

  }
 
  
    if (logedIn === false) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <hi>User Page</hi>
      </>
    );
  }


export default User;
