import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LogIn from "./Login";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          Start
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
