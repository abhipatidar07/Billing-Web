import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authAPI";
// import loginimg from "../assets/images/loginimg.jpg"
import MainBtn from "../components/common/MainBtn";
import img3 from "../assets/images/img3.png"
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Footer from "../components/common/Footer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {email,password} = formData;

  function onChangeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function SubmitHandler(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are mendetory");
    }

    const loginData = formData;
    console.log("Login data",loginData)
    try {
        dispatch(login(email, password, navigate));
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("An unexpected error occurred");
      }
    // dispatch(login(email, password, navigate));
  }

  return (
    <div className=" flex flex-col">
    <div className="flex lg:flex-row flex-col  w-11/12 mt-20  gap-10 justify-between mx-auto my-10">
      <div className=" lg:w-[45%]  lg:mx-20">
        <p className="text-4xl mb-10 ml-5 w-[800] text-brown-800">
        "Log in to simplify your <span className=" text-rose-500">billing</span>{" "}
        today!"
        </p>
        <img className=" rounded-3xl" src={img3} width={1300} alt="" />
      </div>
     
      <div className="bg-rose-50 relative rounded-3xl lg:mt-14 lg:mr-32  lg:w-[400px] max-h-max flex flex-col items-center content-center justify-center border-[2px] shadow-md border-brown-800 ">
        <p className=" text-3xl text-brown-900 mt-8 mb-5">Welcome Back</p>
        <form className="flex flex-col gap-3" onSubmit={SubmitHandler}>
          <label>
            <p>
              Email<span className="text-rose-600">*</span>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter your mail"
              onChange={onChangeHandler}
              className=" w-[300px] h-[40px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <label>
            <p>
              Password<span>*</span>
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChangeHandler}
              className=" w-[300px] h-[40px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>
          
          <Link to="/update-password"><p className=" text-sm text-blue">Forgot Password ?</p></Link>
          
          <button
            className=" flex justify-center content-center mt-4 mb-2"
            type="submit"
          >
            <MainBtn text={"Login"} />
          </button>
        </form>
        <p className=" text-sm text-blue flex flex-row gap-2 mb-4">don't have an account? <span className=" text-rose-600 flex flex-row gap-1"> signup<FaArrowAltCircleRight className="mt-[5px]"/></span></p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginPage;

