import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="w-[700px] flex-col flex gap-5 text-center">
        <img
          src="/assets/images/orange-logo.png"
          alt="orange tn"
          className="w-48 mx-auto mb-10"
        />
        <h1 className="text-3xl font-bold">
          Flybox Analysis For Our Customers
        </h1>
        <h3 className="text-gray-400 font-medium  mb-4">
          Dashboarding, predictions and marketing actions.
        </h3>
        <div className="w-[350px] mx-auto flex flex-col gap-5">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button onClick={() => navigate("/dashboard")} label="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
