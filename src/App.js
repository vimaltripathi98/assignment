import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/LoginSection/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./Components/DashbordSection/UserList";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
