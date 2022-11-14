import React from "react";
const nav = "Trivia questions";
const Navbar = ({ navigateToHome }) => {
  return (
    <div className="bg-stone-900 flex flex-row justify-between h-14 text-white fixed top-0 left-0 right-0">
      <h1 className="pl-5 pt-3.5 text-2xl">{nav}</h1>
      <button
        onClick={navigateToHome}
        className="bg-red-500 hover:bg-red-600 mx-5 mt-2 w-24 h-10"
      >
        Cancel
      </button>
    </div>
  );
};

export default Navbar;
