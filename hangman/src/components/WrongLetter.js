import React from "react";

const WrongLetters = ({ wrongLetter }) => {
  return (
    <div className="wrong-letters-container">
      <div>{wrongLetter.length > 0 && <p>Wrong</p>}</div>
      {wrongLetter
        .map((letter, i) => {
          return <span key={i}>{letter}</span>;
        })
        .reduce((prev, current) => {
          return prev === null ? [current] : [prev, ", "], null;
        })}
    </div>
  );
};

export default WrongLetters;
