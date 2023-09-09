import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col p-4 gap-2 text-center">
        <h1 className="font-bold text-cyan-800 text-3xl">
          Your Unique React Component Library
        </h1>
        <p className="text-neutral-600">
          Welcome to a world of web components designed to make your life easier.
        </p>
        <div className="text-left">
          <h2 className="text-xl font-semibold text-cyan-700 mb-2">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 text-neutral-600">
            <li>Easy-to-use and customize components.</li>
            <li>Built with Tailwind CSS for seamless integration.</li>
            <li>No need to reinvent the wheel - just copy and paste!</li>
            <li>Perfect for modern web development projects.</li>
          </ul>
        </div>
        <div className="mt-4">
          <Link
            to={"/components"}
            className="bg-cyan-800 hover:bg-cyan-900 text-cyan-50 w-fit rounded self-center px-4 py-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
