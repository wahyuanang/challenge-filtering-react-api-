import "./App.css";


import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from "./pages/Home";
import FilterView from "./pages/FilterView";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<FilterView />} />
      </Routes>
    </Router>
    
  );
}

export default App;
