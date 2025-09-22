import axios from "axios";
import React, { useEffect, useState } from "react";

function Borrow() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    book: "",
    borrower: "",
    returnDate: "",
  })

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:4000/api/book");
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  const createBorrow = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:4000/api/borrow",{
            book: form.book,
            member: form.borrower,
            returnDate: form.returnDate
        });
        alert("Borrow record created successfully!");
        setForm({
          book: "",
          borrower: "",
          returnDate: "",
        });
    } catch (error) {
        console.log("error", error)
    }
  }

  return (
    <div className="borrow">
      <form onSubmit={createBorrow}>
        <div className="form-control">
          <label>Select Book</label>
          <select name="book" value={form.book} onChange={(e) => setForm({...form, book: e.target.value})}>
            <option disabled value="">Select Book</option>
            {books.map((book) => (
              <option key={book._id} value={book.title}>{book.title}</option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label>Borrower's Name</label>
          <input type="text" placeholder="Example: Jhon Doe" value={form.borrower} onChange={(e) => setForm({...form, borrower: e.target.value})}/>
        </div>
        <div className="form-control">
          <label>Return Date</label>
          <input type="date" value={form.returnDate} onChange={(e) => setForm({...form, returnDate: e.target.value})}/>
        </div>

        <button type="submit">Borrow</button>
      </form>
    </div>
  );
}

export default Borrow;
