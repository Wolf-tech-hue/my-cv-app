import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Nathan Morake CV💻</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️Light Mode" : "🌙Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
