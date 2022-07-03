import React from "react";

type Props = {
  label: string;
  onClick: () => void;
};

const Button = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="mx-auto border-none shadow-none font-semibold rounded-md bg-orange-tn text-white px-4 py-2 w-28 hover:bg-orange-700"
    >
      {label}
    </button>
  );
};

export default Button;
