import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ theme, setTheme }) {
  // ✅ toggle function (missing earlier)
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`navbar navbar-expand-lg shadow-lg sticky-top ${theme}`}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fs-2" href="/">
          Digambar's Portfolio
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse mt-3 mt-lg-0"
          id="navbarContent"
        >
          <ul className="navbar-nav ms-auto align-items-center text-center gap-lg">
            {["summary", "about", "skills", "projects", "contact"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link fw-medium" href={`#${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ),
            )}

            {/* 🌗 Theme Toggle */}
            <li className="nav-item mt-2 mt-lg-0 ms-lg-2">
              <button
                onClick={toggleTheme}
                className="btn border border-dark rounded-pill d-flex align-items-center p-1"
                style={{ width: "65px" }}
              >
                <span className={`toggle-circle ${theme}`}>
                  {theme === "light" ? (
                    <FaSun size={14} />
                  ) : (
                    <FaMoon size={14} />
                  )}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
