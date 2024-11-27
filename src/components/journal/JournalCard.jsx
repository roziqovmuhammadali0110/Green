import React from "react";

const JournalCard = ({ title, imgSrc }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-center mb-4">{title}</h3>
      <button className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition">
        Юклаб олиш
        <span className="material-icons">file_download</span>
      </button>
    </div>
  );
};

export default JournalCard;
