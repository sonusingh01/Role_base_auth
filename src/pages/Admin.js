import React from "react";

import { Navigate } from "react-router";

const Admin=()=> {
  const token = localStorage.getItem("AdminToken");
   let  logedIn = true;
    if (token == null) {
      logedIn = false;
    

  }
  
  
    if (logedIn === false) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <hi>admin page</hi>
      </>
    );
  }


export default Admin;
