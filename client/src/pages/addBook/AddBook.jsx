import React, { useState } from "react";
import "./addBook.css";
import axios from "axios";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    language: ""
  });

  const handleAddBook = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/book", {
        title: form.title,
        author: form.author,
        category: form.category,
        language: form.language
      });
      alert("Book Added")
    } catch (error) {
      console.log("error to add book");
      alert("Failed")
    }
  };
  return (
    <div className="add-book">
      <h2>Add book to library</h2>

      <form onSubmit={handleAddBook}>
        <div className="form-control">
          <label htmlFor="title">Book Title</label>
          <input
            type="text"
            placeholder="Example: A Tale of Two Cities"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="author">Book Author</label>
          <input
            type="text"
            placeholder="Example: Jhon Doe"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Category">Book Category</label>
          <input
            type="text"
            placeholder="Example: Fantasy"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="language">Book Language</label>
          <input
            type="text"
            placeholder="Example: English"
            value={form.language}
            onChange={(e) => setForm({ ...form, language: e.target.value })}
          />
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
