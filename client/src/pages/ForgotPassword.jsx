import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, updatePassword } from "../services/authAPI";
// import loginimg from "../assets/images/loginimg.jpg"
import MainBtn from "../components/common/MainBtn";
import img3 from "../assets/images/img3.png";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import Footer from "../components/common/Footer";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userData = useSelector((state) => state.auth.signupData);
  // const email = userData?.email || ""; // Safely extract email

  // let email = null;
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
    email:""
  });
  // console.log(token);
  // if (token && typeof token === "string") {
  //   try {
  //     const decodedToken = jwtDecode(token);
  //     userId = decodedToken.id;
  //   } catch (error) {
  //     console.error("Error decoding token:", error);
  //     toast.error("Invalid or expired token. Please login again.");
  //     navigate("/login"); // Redirect user to login if token is invalid
  //   }
  // }
  // email = userData.email;
  const { newPassword, confirmNewPassword,email } = formData;

  function onChangeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function SubmitHandler(e) {
    e.preventDefault();
    if ( !newPassword || !confirmNewPassword | !email) {
      toast.error("All fields are mendetory");
    }

    const UpdatePasswordData = formData;
    console.log("Update Password data", UpdatePasswordData);
    console.log(formData);
    try {
      dispatch(
        updatePassword(
          newPassword,
          confirmNewPassword,
          email,
          navigate
        )
      );
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An unexpected error occurred");
    }
    // dispatch(login(email, password, navigate));
  }

  return (
    <div>
    <div className="flex  w-11/12 mt-20  gap-10 justify-center mx-auto my-10">
      
      <div className="bg-pink-50 relative rounded-3xl lg:mt-2   lg:w-[370px] w-[380px] max-h-max flex flex-col items-center content-center justify-center border-brown-600 border-[2px]">
        <p className=" text-3xl text-brown-900 mt-8 mb-5">Welcome Back</p>
        <form className="flex flex-col gap-3" onSubmit={SubmitHandler}>
        <label>
            <p>
              Email<span className="text-rose-600">*</span>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter your mail"
              onChange={onChangeHandler}
              className=" w-[300px] h-[40px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <label>
            <p>
              New Password<span className="text-rose-600">*</span>
            </p>
            <input
              required
              type="password"
              name="newPassword"
              value={newPassword}
              placeholder="Enter your password"
              onChange={onChangeHandler}
              className=" w-[300px] h-[40px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <label>
            <p>
              Confirm Password<span className="text-rose-600">*</span>
            </p>
            <input
              required
              type="password"
              name="confirmNewPassword"
              value={confirmNewPassword}
              placeholder="Enter your password"
              onChange={onChangeHandler}
              className=" w-[300px] h-[40px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <Link to="/login">
            <p className=" flex flex-row text-sm text-blue">
              <FaArrowAltCircleLeft className=" mt-1 mr-1" />
              Back to login
            </p>
          </Link>

          <button
            className=" flex justify-center content-center mt-4 mb-7"
            type="submit"
          >
            <MainBtn text={"Update"} />
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ForgotPassword;
