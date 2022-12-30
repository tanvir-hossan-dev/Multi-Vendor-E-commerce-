import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/features/product/productSlice";
import { userLoggedIn } from "../Redux/features/user/userSlice";

const useAuthCheck = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localAuth = localStorage.getItem("Ecommerce-Auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
        dispatch(userLoggedIn({ accessToken: auth.accessToken, user: auth.user }));
      }
    }

    setAuthChecked(true);
  }, []);
  return authChecked;
};

export default useAuthCheck;
