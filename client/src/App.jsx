import { useState, useEffect } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/sections/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddBook from "./pages/addBook/AddBook";
import Books from "./pages/Books/Books";
import Borrow from "./pages/Borrow/Borrow";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={[theme === "light" ? "App-light" : "App-dark", "App"].join(
            " "
          )}
        >
          <Header />
          <Routes>
            <Route path="/" index element={<Home />}/>
            <Route path="/add-book" index element={<AddBook />}/>
            <Route path="/books" index element={<Books />}/>
            <Route path="/borrow" index element={<Borrow />}/>
          </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
