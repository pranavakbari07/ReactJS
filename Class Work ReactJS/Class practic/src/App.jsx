import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import FormHandling from "./Components/Hooks/FormHandling";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <FormHandling /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/nav" Component={Nav} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
