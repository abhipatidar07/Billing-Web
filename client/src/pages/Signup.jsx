import React, { useState } from "react";
import MainBtn from "../components/common/MainBtn";
import { toast } from "react-hot-toast";
import signupimg from "../assets/images/signupimg.png"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../slices/authSlice";
import { signup } from "../services/authAPI";
import Footer from "../components/common/Footer";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });
  
  const { fullName, email, phoneNo, password, confirmPassword } = formData;

  const onChangeHandler = (e) =>{
    setFormData((prevData)=>({
        ...prevData,
        [e.target.name]:e.target.value
    }))
  }
  const SubmitHandler = (e) =>{
    e.preventDefault();
    if(password !== confirmPassword){
    toast.error("Password does not match");
    }

    console.log(formData);
    const signupData = formData;

    dispatch(setSignupData(signupData));
    // dispatch(sign)
    dispatch(signup(fullName,email,phoneNo,password,confirmPassword,navigate));
    setFormData({
        fullName: "",
        email: "",
        phoneNo: "",
        password: "",
        confirmPassword: "",
    })
    
  }
 
  return (
    <div className="flex flex-col">
    <div className="flex lg:flex-row flex-col-reverse  w-11/12 mt-20  gap-10 justify-between mx-auto my-10">
        {/* <div className=" absolute w-[390px] h-[561px] rounded-3xl lg:left-[70px] lg:-bottom-[90px] bg-pink-300"></div> */}
      <div className="bg-pink-50 shadow-lg border-2 border-brown-500 relative rounded-3xl  lg:w-[400px] max-h-max flex flex-col items-center content-center justify-center">
        <p className=" text-2xl text-brown-900 mt-3 mb-5">Register Yourself</p>
        <form className="flex flex-col gap-3" onSubmit={SubmitHandler}>
          <label className=" ">
            <p className="text-sm text-brown-900">
              Name<span className=" text-rose-600">*</span>
            </p>
            <input
              required
              type="text"
              name="fullName"
              value={fullName}
              placeholder="Enter Your Name"
              onChange={onChangeHandler}
              className=" w-[300px] h-[30px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <label>
            <p className="text-sm text-brown-900">
              Email<span className=" text-rose-600">*</span>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter your mail"
              onChange={onChangeHandler}
              className=" w-[300px] h-[30px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <label>
            <p className="text-sm text-brown-900">
              Phone Number<span className=" text-rose-600">*</span>
            </p>
            <input
              required
              type="Number"
              name="phoneNo"
              value={phoneNo}
              placeholder="12345 67890"
              onChange={onChangeHandler}
              className=" w-[300px] h-[30px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <label>
            <p className="text-sm text-brown-900">
              Password<span className=" text-rose-600">*</span>
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChangeHandler}
              className=" w-[300px] h-[30px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>

          <label>
            <p className="text-sm text-brown-900">
              Confirm Password<span className=" text-rose-600">*</span>
            </p>
            <input
              required
              type="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Enter your password"
              onChange={onChangeHandler}
              className=" w-[300px] h-[30px] border-b-[1px] border-pink-300 bg-pink-200 px-4 rounded-md"
            />
          </label>
          <button className=" flex justify-center content-center mt-4 mb-7" type="submit">
            <MainBtn text={"Create Account"}/>
          </button>
        </form>
      </div>
      <div className=" lg:w-[65%] w-full">
            <p className="text-3xl mb-10 w-[800] text-brown-800 ">"Say goodbye to <span className=" text-rose-500">billing</span> stress! Sign up now and discover the smarter way to manage your accounts."</p>
            <img className=" rounded-3xl" src={signupimg} width={1000}  alt="" />
        </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Signup;
