import { Link } from "react-router-dom";

export default function Nav() {
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
      </nav>
    </div>
  );
}