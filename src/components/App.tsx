import React, {useState, useEffect} from 'react';
import './App.css';

import Nav from "./common/Nav"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
