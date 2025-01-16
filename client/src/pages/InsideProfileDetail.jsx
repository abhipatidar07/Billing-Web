import React from "react";
import { useState } from "react";
import img from "../assets/images/InsideProfileimg.jpg";
import MainBtn from "../components/common/MainBtn";
import { setProfileData } from "../slices/profileSlice";
import { updateProfile } from "../services/profileAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import profileimg from "../assets/images/profileinside.png"
import Footer from "../components/common/Footer";


const InsideProfileDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    shopGSTIN: "",
    logo: "",
    about: "",
  });
  const {
    organizationName,
    email,
    addressLine1,
    addressLine2,
    shopGSTIN,
    logo,
    about,
  } = formData;

  function onChangeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  function submitHandler(e) {
    e.preventDefault();


    console.log(formData);
    const profileDatas = formData;

    dispatch(setProfileData(profileDatas));
    navigate("/dashboard/generate-bill");
    // dispatch(sign)
    dispatch(updateProfile(organizationName,email,addressLine1,addressLine2,shopGSTIN,about,logo,navigate));

    
  }
  return (
    <div className=" flex flex-col">
    <div className=" w-11/12 mx-auto justify-center content-center flex lg:flex-row flex-col my-10 ">
      <div className=" flex flex-col lg:ml-[40px] ml-11 gap-4  mt-[60px]">
        <h1 className="text-4xl text-brown-900 ">
          Create your <span className=" text-rose-600">Billing</span> software
        </h1>
        <div className="lg:max-w-max w-full lg:max-h-max   lg:px-[30px] px-7 lg:ml-0 -ml-5   py-[20px] rounded-lg shadow-md border-black border-[1px]   h-full bg-white">
          <form className="flex flex-col gap-3" onSubmit={submitHandler}>
            <div className=" flex lg:flex-row flex-col lg:gap-20 gap-3">
              <label className=" flex flex-col gap-3">
                <p className=" text-sm text-brown-900">
                  Organization Name<span className="text-rose-600">*</span>
                </p>
                <input
                  required
                  type="text"
                  name="organizationName"
                  value={organizationName}
                  placeholder="Enter organization name"
                  onChange={onChangeHandler}
                  className=" w-[250px] h-[35px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
                />
              </label>
              <label className=" flex flex-col gap-3">
                <p className=" text-sm text-brown-900">
                  Email<span className="text-rose-600">*</span>
                </p>
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter your mail"
                  onChange={onChangeHandler}
                   className=" w-[250px] h-[35px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
                />
              </label>
            </div>

            <div className=" flex  flex-col lg:flex-row lg:gap-20 gap-3">
              <label className=" flex flex-col gap-3">
                <p className=" text-sm text-brown-900">
                  Address Line1<span className="text-rose-600">*</span>
                </p>
                <input
                  required
                  type="text"
                  name="addressLine1"
                  value={addressLine1}
                  placeholder="Enter state district pincode"
                  onChange={onChangeHandler}
                  className=" w-[250px] h-[35px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
                />
              </label>
              <label className=" flex flex-col gap-3">
                <p className=" text-sm text-brown-900">
                  Address Line2<span className="text-rose-600">*</span>
                </p>
                <input
                  required
                  type="text"
                  name="addressLine2"
                  value={addressLine2}
                  placeholder="Enter street area home"
                  onChange={onChangeHandler}
                   className=" w-[250px] h-[35px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
                />
              </label>
            </div>

            <div className=" flex lg:flex-row flex-col lg:gap-20 gap-3">
              <div>
                <label className=" flex flex-col gap-3">
                  <p className=" text-sm text-brown-900">
                    ShopGSTIN<span className="text-rose-600">*</span>
                  </p>
                  <input
                    required
                    type="text"
                    name="shopGSTIN"
                    value={shopGSTIN}
                    placeholder="Enter gst no"
                    onChange={onChangeHandler}
                    className=" w-[250px] h-[35px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
                  />
                </label>
                <label className=" flex flex-col gap-3 mt-3">
                  <p className=" text-sm text-brown-900">
                    UPI QR<span className="text-rose-600">*</span>
                  </p>
                  {/* <input
                    required
                    type="text"
                    name="logo"
                    value={logo}
                    placeholder="logo"
                    onChange={onChangeHandler}
                    className=" w-[250px] h-[35px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
                  /> */}<input
                  required
                  type="file"
                  accept="image/*"
                  name="logo"
                  onChange={(e)=>{
                    const file = e.target.files[0];
                    if(file){
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData((prevData)=>({
                          ...prevData,
                          logo: reader.result,
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                   className="w-[250px] h-[60px] py-3 border-[1px] border-gray-600 bg-gray-50 px-4 rounded-md"
                  />
                </label>
              </div>
              <label className=" flex flex-col gap-3">
                <p className=" text-sm text-brown-900">
                  About<span className="text-rose-600">*</span>
                </p>
                <textarea
                  required
                  type="text"
                  name="about"
                  value={about}
                  placeholder="Write about your organization"
                  onChange={onChangeHandler}
                  className=" w-[250px] h-[140px] border-[1px] py-4  border-gray-600 bg-gray-50 px-4 rounded-md"
                />
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button className=" w-[150px] h-[35px] bg-purpule rounded-md text-white" type="submit">
                Create Bill
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" lg:w-[800px] w-[350px] flex mt-[100px]">
        <img src={profileimg}  alt="" />
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default InsideProfileDetail;

