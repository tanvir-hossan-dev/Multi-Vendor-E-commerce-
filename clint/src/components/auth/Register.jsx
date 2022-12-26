import React from "react";
import { Button, Input, Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
      <form className="w-[500px] p-[25px] bg-[#f1f1f1] rounded-md">
        <h2 className="text-[30px] pb-[15px] text-center">Create Your Account</h2>
        <div className="w-full py-[10px]">
          <Input color="blue" required type="text" variant="outlined" label="Full Name" />
        </div>
        <div className="w-full py-[10px]">
          <Input color="blue" required type="email" variant="outlined" label="E-mail" />
        </div>
        <div className="w-full py-[10px]">
          <Input color="blue" required type="number" variant="outlined" label="Number" />
        </div>
        <div className="w-full py-[10px]">
          <Select label="Select Version">
            <Option>Seller</Option>
            <Option>User</Option>
          </Select>
        </div>
        <div className="w-full py-[10px]">
          <Input color="blue" required type="password" variant="outlined" label="Password" />
        </div>

        <div>
          <Button className="w-full py-[10px] my-[15px]"> Submit</Button>
        </div>
        <div>
          <p className="text-gray-800 text-right ">
            Singin Account?
            <Link className="text-black underline ml-[10px]" to="/login">
              Login{" "}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
