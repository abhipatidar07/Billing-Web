
import React from "react";
import { useState } from "react";
import img from "../../assets/images/InsideProfileimg.jpg";
import MainBtn from "../../components/common/MainBtn";
import { setProfileData } from "../../slices/profileSlice"
import { updateProfile } from "../../services/profileAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import profileimg from "../../assets/images/profileinside.png"
import ImageInput from "../common/ImageInput";


const Settings = () => {
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

  // function handleImageSelect(file) {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     logo: file,
  //   }));
  // }

  function submitHandler(e) {
    e.preventDefault();


    console.log(formData);
    const profileDatas = formData;

    dispatch(setProfileData(profileDatas));
    navigate("/dashboard/my-profile");
    // dispatch(sign)
    dispatch(updateProfile(organizationName,email,addressLine1,addressLine2,shopGSTIN,about,logo,navigate));

    
  }
  return (
    
    <div className=" w-11/12 mx-auto justify-center content-center flex lg:flex-row ">
      <div className=" flex flex-col ml-[40px] gap-4 mb-40  mt-[60px]">
        <h1 className="text-4xl text-brown-900">
          Update your <span className=" text-rose-600">profile</span> here
        </h1>
        <div className="w-full max-h-max px-[30px]  py-[20px] rounded-lg shadow-md border-[1px] border-black h-screen bg-white">
          <form className="flex flex-col gap-3" onSubmit={submitHandler}>
            <div className=" flex lg:flex-row flex-col lg:gap-20 gap-2">
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
                  className=" lg:w-[400px] w-[300px] h-[30px] text-sm border-[1px]  border-gray-500 px-4 rounded-md"
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
                className="lg:w-[400px] w-[300px] h-[30px] text-sm border-[1px]  border-gray-500 px-4 rounded-md"
                />
              </label>
            </div>

            <div className=" flex lg:flex-row flex-col lg:gap-20 gap-2">
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
                 className=" lg:w-[400px] w-[300px] h-[30px] text-sm border-[1px]  border-gray-500 px-4 rounded-md"
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
                  className=" lg:w-[400px] w-[300px] h-[30px] text-sm border-[1px]  border-gray-500 px-4 rounded-md"
                />
              </label>
            </div>

            <div className=" flex lg:flex-row flex-col lg:gap-20 gap-2">
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
                   className=" lg:w-[400px] w-[300px] h-[30px] text-sm border-[1px]  border-gray-500 px-4 rounded-md"
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
                  className=" w-[400px] h-[30px] text-sm border-[1px]  border-gray-500 px-4 rounded-md"
                  /> */}
                  <input
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
                   className="lg:w-[400px] w-[300px] h-[60px] py-3 border-[1px] border-gray-600 bg-gray-50 px-4 rounded-md"
                  />
                </label> 
                {/* <ImageInput onImageSelect={handleImageSelect}/> */}


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
                 className=" lg:w-[400px] w-[300px] h-[135px] text-sm border-[1px]  border-gray-500 px-4 rounded-md"
                />
              </label>
            </div>
            <div className="flex justify-center bg-purpule text-white w-[150px] mx-auto h-[30px] rounded-md shadow-md mt-4">
              <button type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    
  )
}

export default Settings
