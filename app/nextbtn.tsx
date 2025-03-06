"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState(
    "At Boadi Corp., we understand that every industry has unique logistics challenges. That’s why we offer customized solutions for a wide range of sectors."
  );

  const texts = [
    "At Boadi Corp., we understand that every industry has unique logistics challenges. That’s why we offer customized solutions for a wide range of sectors.",
    "Our logistics solutions are designed to optimize your supply chain, reduce costs, and improve efficiency.",
    "We provide tailored transportation services to ensure timely and secure deliveries across all industries.",
  ];

  const handleNext = () => {
    setText((prevText) => {
      const index = texts.indexOf(prevText);
      return texts[(index + 1) % texts.length]; // Cycle forward
    });
  };

  const handlePrev = () => {
    setText((prevText) => {
      const index = texts.indexOf(prevText);
      return texts[(index - 1 + texts.length) % texts.length]; // Cycle backward
    });
  };

  return (
    <div className="h-screen bg-gray-100 font-[Source Sans Pro] flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Boadi Corp.</a>
        </div>
        <div className="navbar-end">
          <Link href="./login" className="px-4 py-2 bg-black text-white rounded-lg text-sm">
            Login/SignUp
          </Link>
        </div>
      </div>

      {/* Industries Section */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
          <div className="lg:w-1/2">
            <p className="text-gray-500 uppercase tracking-wide text-sm">/Industries We Serve</p>
            <h1 className="text-4xl lg:text-6xl font-bold mt-2 leading-tight">
              Tailored Logistics for Every Business
            </h1>
          </div>
          <div className="lg:w-1/3 mt-6 lg:mt-0">
            <p className="text-gray-600">{text}</p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="p-2 border rounded-full hover:bg-gray-200" onClick={handlePrev}>←</button>
              <button className="p-2 border rounded-full hover:bg-gray-200" onClick={handleNext}>→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
