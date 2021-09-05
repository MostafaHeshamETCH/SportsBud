import React from "react";

function RoundedBtn({ txt }) {
  return (
    <button className="bg-gray-100 border-0 btn-padding focus:outline-none hover:bg-gray-200 rounded-full text-gray-900 very-small-txt">
      {txt}
    </button>
  );
}

export default RoundedBtn;
