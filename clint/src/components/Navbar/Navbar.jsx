import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-gray-200">
      <div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="form-control w-[500px]">
        <input type="text" placeholder="Search" className="input w-full input-bordered" />
      </div>
      <div className="px-4">
        <ul className="menu menu-horizontal mr-8">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link className="text-[22px]" to="/cart">
              {" "}
              <BsCartCheckFill />
            </Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
