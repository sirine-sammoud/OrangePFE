import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<>test</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
