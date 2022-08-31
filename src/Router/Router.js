import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Logins";
import Manager from "../pages/Manager";

import User from "../pages/User";
import { Protected } from "./Protected";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Protected element={Admin} />} />
        <Route path="/user" element={<Protected element={User} />} />
        <Route path="/manager" element={<Protected element={Manager} />} />
      </Routes>
    </div>
  );
}

export default Router;
