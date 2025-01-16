import React from "react";
import { useState } from "react";
import profileimg from "../assets/images/profileimg.png";
import MainBtn from "../components/common/MainBtn";
import { setProfileData } from "../slices/profileSlice";
import { updateProfile } from "../services/profileAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileDetail = () => {
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
    const profileDatas = {
      ...formData,
      logo: typeof logo === "string" ? logo : URL.createObjectURL(logo), // Handle file as a URL for preview
    };

    dispatch(setProfileData(profileDatas));
    navigate("/login");
    // dispatch(sign)
    // dispatch(updateProfile(organizationName,email,addressLine1,addressLine2,shopGSTIN,about,logo,navigate));
  }
  return (
    <div className=" flex lg:flex-row flex-col">
      <div className="absolute flex flex-col ml-[40px] gap-4  mt-[60px]">
        <h1 className="text-4xl text-brown-900">
          Create your <span className=" text-rose-600">Billing</span> software
        </h1>
        <div className="max-w-max max-h-max px-[30px]  py-[20px] rounded-lg shadow-md border-[1px] border-black  h-screen bg-white">
          <form className="flex flex-col gap-3" onSubmit={submitHandler}>
            <div className=" flex flex-row gap-20">
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

            <div className=" flex flex-row gap-20">
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

            <div className=" flex flex-row gap-20">
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
                    Logo<span className="text-rose-600">*</span>
                  </p>
                  <input
                    required
                    type="text"
                    name="logo"
                    value={logo}
                    placeholder="logo"
                    onChange={onChangeHandler}
                   className=" w-[250px] h-[35px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
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
                 className=" w-[250px] h-[115px] border-[1px]  border-gray-600 bg-gray-50 px-4 rounded-md"
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

      <div className="relative ml-[450px]">
        <img src={profileimg} width={2000} alt="" />
      </div>
    </div>
  );
};

export default ProfileDetail;
