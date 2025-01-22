import React from "react";

export default function Card({ name, role, onButtonClick }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto text-center relative">
      <h2 className="text-xl text-gray-900 font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <button
        onClick={onButtonClick}
        className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none h-4 w-4"
      >
        ➔
      </button>
    </div>
  );
}
