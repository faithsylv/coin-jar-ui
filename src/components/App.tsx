import React, {useState, useEffect} from 'react';
import './App.css';

import Nav from "./common/Nav"
import { Outlet } from "react-router-dom"

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    color: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3001/users/2')
      const json = await data.json()
      setUser({name: json.name, email: json.email, color: json.color})
    }
    fetchData()
  }, []);

  return (
    <div>
      <Nav />
      <Outlet />
      <p>{user.name}</p>
    </div>
  );
}

export default App;
