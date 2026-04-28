import React from "react";
import books from "../data/list.json";
import BookCard from "./BookCard";

const FreeBooks = () => {
  const filteredBooks = books.filter((book) => book.price >= 12);
  console.log(filteredBooks);

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
