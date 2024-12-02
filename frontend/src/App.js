import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <BrowserRouter>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/signin" element={<SignIn setCurrentPage={setCurrentPage} />} />
        <Route path="/signup" element={<SignUp setCurrentPage={setCurrentPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
