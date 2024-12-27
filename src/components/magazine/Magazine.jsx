import React from "react";

import JournalCard from "../journal/JournalCard";
const journals = [
  { title: "АГРОCОМ журнал №1-сон", imgSrc: "/path/to/img1.jpg" },
  { title: "АГРОCОМ журнал №2-сон", imgSrc: "/path/to/img2.jpg" },
  { title: "АГРОCОМ журнал №3-сон", imgSrc: "/path/to/img3.jpg" },
  { title: "АГРОCОМ журнал №4-сон", imgSrc: "/path/to/img4.jpg" },
  { title: "АГРОCОМ журнал №5-сон", imgSrc: "/path/to/img5.jpg" },
  {
    title: "АГРОCОМ илмий-инновацион журнал №1-сон",
    imgSrc: "/path/to/img6.jpg"
  }
];
const Magazine = () => {
  return (
    <div className="bg-white w-full py-5">
      {/* <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8 text-center">АГРОCОМ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal, index) => (
            <JournalCard
              key={index}
              title={journal.title}
              imgSrc={journal.imgSrc}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Magazine;
