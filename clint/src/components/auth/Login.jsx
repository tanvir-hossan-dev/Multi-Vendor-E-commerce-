import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../Redux/features/user/userApi";

const Login = () => {
  const initialInputs = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [inputErr, setInputErr] = useState("");
  const [inputs, setInputs] = useState({ ...initialInputs });

  const [userLogin, { data, error, isLoading, isError, isSuccess }] = useUserLoginMutation();

  const handleOnChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    if (!email || !password) {
      setInputErr("Enter Your E-mail and Password");
    } else {
      userLogin(inputs);
      setInputErr("");
    }
  };

  useEffect(() => {
    if (!inputErr && isSuccess && !isError) {
      setInputs({ ...initialInputs });
      navigate("/");
    }
  }, [inputErr, isSuccess, isError]);

  return (
    <div className="flex h-screen justify-center items-center ">
      <form onSubmit={handleSubmit} className="w-[500px] p-[25px] bg-[#f1f1f1] rounded-md">
        <h2 className="text-[30px] pb-[15px] text-center">Sign In Your Account</h2>
        <div className="w-full py-[10px]">
          <Input
            color="blue"
            type="email"
            variant="outlined"
            label="E-mail"
            name="email"
            onChange={handleOnChange}
            value={inputs.email}
          />
        </div>
        <div className="w-full py-[10px]">
          <Input
            color="blue"
            type="password"
            variant="outlined"
            label="Password"
            name="password"
            onChange={handleOnChange}
            value={inputs.password}
          />
        </div>
        <div>
          <Button type="submit" className="w-full py-[10px] my-[15px]">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </div>
        <div>
          <p className="text-gray-800 text-right ">
            Create Account?
            <Link className="text-black underline ml-[10px]" to="/register">
              Register{" "}
            </Link>
          </p>
        </div>
        {inputErr && (
          <div className="alert alert-error shadow-lg mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{inputErr}</span>
            </div>
          </div>
        )}
        {isError && (
          <div className="alert alert-error shadow-lg mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error?.data?.message}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default Login;
