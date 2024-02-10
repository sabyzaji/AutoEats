import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 border-2 bg-custom-nav hover:bg-[#6D2932] transition-all rounded-lg text-center text-white font-semibold">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
