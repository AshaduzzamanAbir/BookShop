import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs text-gray-500">{course.category}</span>

        <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>

        <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold">${course.price}</span>
          <span className="text-xs text-gray-400">ID: {course.id}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 border border-black py-2 rounded-md hover:bg-black hover:text-white transition">
            Enroll
          </button>

          <button className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
