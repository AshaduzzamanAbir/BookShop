import React from "react";
import BookCard from "./BookCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const FreeBooks = () => {
  const [books, setBooks] = useState([]);

  // const filteredBooks = books.filter((book) => book.price >= 12);
  // console.log(filteredBooks);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("/book");
        setBooks(response.data.book);
        console.log(response.data.book);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Free Books</h2>
          <p className="text-gray-500">Explore our collection of free books</p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeBooks;
