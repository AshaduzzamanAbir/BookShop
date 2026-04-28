import React from "react";
import courses from "../data/course.json";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CourseBanner from "../components/CourseBanner";

const Course = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <CourseBanner />
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 ">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                Popular Courses
              </h2>
              <p className="text-gray-500">
                Upgrade your skills with our top courses
              </p>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Course;
