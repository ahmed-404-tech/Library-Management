import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import ThemeContext from '../../context/ThemeContext'

function Home() {
    const {theme} = useContext(ThemeContext);
  return (
    <div className='home'>
        <Link to="/books" className='card'><img src={theme === "light" ? "books.png" : "books-dark.png"} alt="Add Book" /> Books</Link>
        <Link to="/add-book" className='card'><img src={theme === "light" ? "add-light.png" : "add.png"} /> Add Book</Link>
        <Link to="/borrow" className='card'><img src={theme === "light" ? "borrow-light.png" : "borrow.png"} alt="Add Book" /> Borrow Book</Link>
    </div>
  )
}

export default Home
