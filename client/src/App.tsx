import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Web } from "./pages/Web";

import "./App.css";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/web" element={<Web />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
