import React from "react";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: any;
  type?: string;
};

const Input = ({ placeholder, value, onChange, type }: Props) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className="rounded-md bg-gray-200 border-none px-4 py-2 w-full focus:outline-none focus-visible:ring-2 focus:ring-orange-tn"
    />
  );
};

export default Input;
