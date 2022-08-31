import React, {  useState } from "react";

import Data from "../data/Data";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    isUserLogin: false,
    isAdminLogin: false,
    isManagerLogin: false,
  });
  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formData;

    let isUserExist = Data.find((user) => {
      return user.username === username;
    });

    if (isUserExist) {
      if (password === isUserExist.password && isUserExist.role === "Admin") {
        localStorage.setItem(
          "AdminToken",
          "AsiaToJapanAdminhbchsdbchsdbjcxjcbdshjoeuwyru"
        );
        setFormData({
          isAdminLogin: true,
          fullname: isUserExist.firstName + " " + isUserExist.lastName,
        });
      } else if (
        password === isUserExist.password &&
        isUserExist.role === "User"
      ) {
        localStorage.setItem(
          "UserToken",
          "AsiaToJapanUserhbchsdbchsdbjcxjcbdshjoeuwyru"
        );
        setFormData({
          isUserLogin: true,
          fullname: isUserExist.firstName + " " + isUserExist.lastName,
        });
      } else if (
        password === isUserExist.password &&
        isUserExist.role === "Manager"
      ) {
        localStorage.setItem(
          "ManagerToken",
          "AsiaToJapanUserhbchsdbchsdbjcxjcbdshjoeuwyru"
        );
        setFormData({
          isManagerLogin: true,
          fullname: isUserExist.firstName + " " + isUserExist.lastName,
        });
      } else alert("Wrong Password");
    } else alert("User Not exist");
  };

  
  const Navigate = useNavigate();

  if (formData.isAdminLogin) {
    Navigate("/admin");
  } else if (formData.isUserLogin) {
    Navigate("/user");
  } else if (formData.isManagerLogin) {
    Navigate("/manager");
  }
  




  return (
       
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter UserName"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Login;
