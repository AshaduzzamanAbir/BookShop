import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-full max-w-sm">
      {/* Image */}
      <img
        src={book.image}
        alt={book.name}
        className="h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs text-gray-500">{book.category}</span>

        <h2 className="text-lg font-semibold text-gray-800">{book.name}</h2>

        <p className="text-sm text-gray-500">{book.title}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-black">${book.price}</span>
          <span className="text-xs text-gray-400">ID: {book.id}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 border border-black text-black py-2 rounded-md hover:bg-black hover:text-white transition cursor-pointer">
            Read
          </button>

          <button className="flex-1 bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-300 transition cursor-pointer">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
