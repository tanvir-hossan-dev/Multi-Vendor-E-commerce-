import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userLogedOut } from "../../Redux/features/user/userSlice";
import gravatarUrl from "gravatar-url";

const Navbar = ({ searchFun, search }) => {
  const { user, accessToken } = useSelector((state) => state.user);
  const { card } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const hanldeLogOut = () => {
    dispatch(userLogedOut());
    localStorage.removeItem("Ecommerce-Auth");
  };

  return (
    <div className={`navbar flex justify-between sticky top-0 z-10 bg-gray-200`}>
      <div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Daraz
        </Link>
      </div>
      <div className="form-control w-[500px]">
        <input
          type="text"
          placeholder="Search"
          onChange={searchFun}
          className="input w-full input-bordered"
          value={search}
        />
      </div>

      <div className="px-4">
        <ul className="menu menu-horizontal mr-8">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link className="text-[22px]" to="/cart">
              {" "}
              <BsCartCheckFill /> {card?.length > 0 && <div className="badge badge-primary">{card?.length}</div>}
            </Link>
          </li>
        </ul>
        {user && accessToken ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={gravatarUrl(user.email)} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user?.name}</a>
              </li>
              {user.role === "Seller" && (
                <li>
                  <Link to="/vendordashboard" className="justify-between">
                    Vendor Dashboard
                  </Link>
                </li>
              )}
              {user.role === "Admin" && (
                <li>
                  <Link to="/admindashboard" className="justify-between">
                    Admin Dashboard
                  </Link>
                </li>
              )}

              <li onClick={hanldeLogOut}>
                <a>Logout</a>
              </li>
              {}
            </ul>
          </div>
        ) : (
          <ul className="menu menu-horizontal mr-8">
            {" "}
            <li>
              <Link to="/login">SignIn</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
