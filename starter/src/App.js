import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Myreads from "./components/Myreads";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Myreads />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
