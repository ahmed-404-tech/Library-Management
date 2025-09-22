import React from "react";
import { useState } from "react";

function EditBook( {title, author, category} ) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
  });

  const handleUpdateBook = async (id) => {};

  return (
    <form>
      <div className="form-control">
        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          placeholder="Example: A Tale of Two Cities"
          value={title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div className="form-control">
        <label htmlFor="author">Book Author</label>
        <input
          type="text"
          placeholder="Example: Jhon Doe"
          value={author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
      </div>
      <div className="form-control">
        <label htmlFor="Category">Book Category</label>
        <input
          type="text"
          placeholder="Example: Fantasy"
          value={category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
}

export default EditBook;
