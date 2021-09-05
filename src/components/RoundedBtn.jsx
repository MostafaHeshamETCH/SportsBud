import React from "react";

function RoundedBtn({ txt, bgColor }) {
  const className =
    bgColor +
    "border-0 btn-padding focus:outline-none hover:bg-gray-200 rounded-full very-small-txt";
  return <button className={className}>{txt}</button>;
}

export default RoundedBtn;
