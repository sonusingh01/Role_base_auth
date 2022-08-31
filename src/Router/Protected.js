import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Protected = () => {

  const navigate = useNavigate();

  useEffect(() => {
     let login = localStorage.getItem("user ");
     
    if(!login) {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet/>;
};
