import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Logins";
import Manager from "../pages/Manager";

import User from "../pages/User";


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/user" element={<User />} />

        <Route path="/manager" element={<Manager/>} />

        {/* <Route path="/admin" element={<{Admin/>} } />
        <Route path="/user" element={<Protected element={User} />} />
        <Route path="/manager" element={<Protected element={Manager} />} /> */}
      </Routes>
    </div>
  );
}

export default Router;
