import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../firebase/Firebase_Config";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

const SignInWithNumber = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmObj, setConfirmObj] = useState("");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const setUpRecaptcha = (phone) => {
    const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (number) {
      setError("");

      try {
        const res = await setUpRecaptcha(number);
        console.log(res);
        setConfirmObj(res);
        setFlag(true);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("Enter a valid phone number");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (otp) {
      confirmObj
        .confirm(otp)
        .then((result) => {
          console.log(result);
          navigate("/login");
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setError("Set Your OTP");
    }
  };
  return (
    <>
      {" "}
      <div className="flex h-screen justify-center items-center ">
        {/* Send OTP */}
        <form onSubmit={handleSendOTP} className="w-[500px] p-[25px] bg-[#f1f1f1] rounded-md">
          <h2 className="text-[30px] pb-[15px] text-center">Sign In Your Account With Number</h2>
          {!flag ? (
            <div>
              <div className="w-full py-[10px]">
                <PhoneInput defaultCountry="BD" placeholder="Enter phone number" value={number} onChange={setNumber} />
                <div className="mt-4 ml-10" id="recaptcha-container" />
              </div>
              <div>
                <Button type="submit" className="w-full py-[10px] my-[15px]">
                  Send OTP
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="w-full py-[10px]">
                <Input
                  color="blue"
                  required
                  type="number"
                  variant="outlined"
                  label="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                {/* <div className="mt-4 ml-10" id="recaptcha-container" /> */}
              </div>
              <div>
                <Button onClick={handleVerifyOTP} className="w-full py-[10px] my-[15px]">
                  Verify OTP
                </Button>
              </div>
            </div>
          )}

          {error && (
            <div className="alert alert-error shadow-lg">
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
                <span>{error}</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default SignInWithNumber;
