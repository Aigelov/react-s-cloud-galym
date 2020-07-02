import React from 'react';
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
