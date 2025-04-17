import React from "react";

export default function Card({ name, role, age, onButtonClick }) {
  // console.log(role);
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto text-center relative border">
      <h2 className="text-xl text-gray-900 font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{role}</p>
      {age && <span>{age} ans</span>}
      <button
        onClick={onButtonClick}
        className="absolute top-0 right-0 bg-transparent text-gray-600 focus:outline-none h-4 w-4"
      >
        x
      </button>
    </div>
  );
}
