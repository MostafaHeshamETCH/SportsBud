import React from "react";

function RoundedBtn({ txt, bgColor, onClick }) {
  const className =
    bgColor +
    "border-0 btn-padding focus:outline-none rounded-full very-small-txt";
  return (
    <button onClick={onClick} className={className}>
      {txt}
    </button>
  );
}

export default RoundedBtn;
