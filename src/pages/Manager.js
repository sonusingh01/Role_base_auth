import React from "react";

import { Navigate } from "react-router";

const Manager=()=> {
  const token = localStorage.getItem("ManagerToken");
   let logedIn = true;
    if (token == null) {
      logedIn = false;
    

  }
  
  
    if (logedIn === false) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <hi>Manager page</hi>
      </>
    );
  }


export default Manager;
