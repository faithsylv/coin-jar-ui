import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
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
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Coin Jar</h1>
      </Link>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/find-friends">Find Friends</Link> |{" "}
        <Link to="/create-jar">Create Jar</Link>
        <p style={{float:'right'}}>{user.name.toUpperCase()}</p>
      </nav>
    </div>
  );
}