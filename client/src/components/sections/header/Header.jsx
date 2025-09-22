import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";
import "./header.css";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    if (theme === "light") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      setTheme("dark");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      setTheme("light");
    }
  };
  return (
    <header
      className={`header`}
    >
      <Link to="/" className="logo">
        Library Management
      </Link>

      <nav>
        <Link to="/add-book">Add Book</Link>
        <Link to="/borrow">Borrow Book</Link>
        <Link to="/books">Books</Link>
      </nav>

      <button onClick={handleChangeTheme}>
        {theme === "light" ? <IoMoon /> : <IoSunny />}
      </button>
    </header>
  );
}

export default Header;
