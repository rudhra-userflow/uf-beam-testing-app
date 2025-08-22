import { Outlet, Link } from "react-router-dom";
import "./styles/Navbar.css";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/test", label: "Test" },
  { to: "/query?name=John&age=30", label: "Query Params" },
  { to: "/start-with-link", label: "Start with Link" },
  { to: "/post", label: "Posts" },
  { to: "/post-fr", label: "Posts (FR)" },
  { to: "/shadowdomlogin", label: "Shadow Login" },
  { to: "/ufusersusingAPI", label: "UF Users" },
];

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand-link">
            Userflow - Beamer Testing
          </Link>
        </div>
        <ul className="navbar-nav">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="navbar-item">
              <Link
                to={to}
                className="navbar-link"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
