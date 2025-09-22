import React, { useEffect, useState } from "react";
import "./books.css";
import axios from "axios";
import EditBook from "../../components/editBook/EditBook";

function Books() {
  const [books, setbooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [bookId, setBookId] = useState(null);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      await axios.delete(`http://localhost:4000/api/book/${id}`);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/book");
        setbooks(response.data);
      } catch (error) {
        console.log("Error to fetching Data");
      }
    };

    fetchBooks();
  }, [handleDelete]);

  return (
    <div className="books">
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Language</th>
          <th></th>
        </tr>
        {books.map((book) => {
          return (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.language}</td>
              <td className="btns">
                <button
                  className="btn delete"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Books;
