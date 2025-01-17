// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { FiEdit } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const MyProfile = () => {
//   const profileData = useSelector((state) => state.profile.profileData);
//   console.log("ProfileData", profileData);
//   const navigate = useNavigate();

//   return (
//     <div className="mt-[30px] mx-16">
//       <div className=" flex flex-col gap-10">
//         <h1 className=" text-4xl font-bold text-brown-900 ">
//           Your <span className=" text-rose-600">profile</span> details
//         </h1>
//         {/*Section1 */}
//         <div className=" flex flex-col gap-3 bg-rose-50 px-10 py-5 border-[1px]  border-rose-200 rounded-lg">
//           <div className=" flex flex-row justify-between">
//             <p className=" text-brown-900 text-2xl font-bold">
//               Organization Details
//             </p>
//             <button
//               onClick={() => {
//                 navigate("/dashboard/settings");
//               }}
//               className=" rounded-md drop-shadow-md w-[70px] h-[30px] bg-rose-400 flex flex-row gap-2 px-2 py-1 "
//             >
//               <FiEdit className="text-white mt-[2px]" />
//               <p className=" text-white mb-1">Edit</p>
//             </button>
//           </div>
//           <hr className=" h-[1px] bg-rose-300" />
//           <div className=" flex flex-row gap-44">
//             <div className=" flex flex-col ">
//               <p className=" text-brown-900 text-xl ">Organization Name</p>
//               <p className=" text-brown-800">{profileData.organizationName}</p>
//             </div>
//             <div>
//               <p className=" text-brown-900 text-xl">Email</p>
//               <p className=" text-brown-800 ">{profileData.email}</p>
//             </div>
//           </div>
//         </div>

//         {/*Section2 */}
//         <div className=" flex flex-col gap-3  bg-rose-50 px-10 py-5 border-[1px]  border-rose-200 rounded-lg">
//           <div className=" flex flex-row justify-between">
//             <p className=" text-brown-900 text-2xl font-bold">Address</p>
//             <button
//               onClick={() => {
//                 navigate("/dashboard/settings");
//               }}
//               className="rounded-md drop-shadow-md w-[70px] h-[30px] bg-rose-400 flex flex-row gap-2 px-2 py-1 "
//             >
//               <FiEdit className="text-white mt-[2px]" />
//               <p className=" text-white mb-1">Edit</p>
//             </button>
//           </div>
//           <hr className=" h-[1.5px] bg-rose-300" />
//           <div className=" flex flex-row gap-44">
//             <div className=" flex flex-col ">
//               <p className=" text-brown-900 text-xl ">Address Line1</p>
//               <p className=" text-brown-800">{profileData.addressLine1}</p>
//             </div>
//             <div>
//               <p className=" text-brown-900 text-xl">Address Line2</p>
//               <p className=" text-brown-800 ">{profileData.addressLine2}</p>
//             </div>
//           </div>
//         </div>

//         {/*Section3 */}
//         <div className="flex flex-col gap-3 justify-between  bg-rose-50 px-10 py-5 border-[1px]  border-rose-200 rounded-lg">
//           <div className=" flex flex-row justify-between">
//             <h1 className=" text-brown-900 text-2xl font-bold">About</h1>
//             <button
//               onClick={() => {
//                 navigate("/dashboard/settings");
//               }}
//               className=" rounded-md drop-shadow-md w-[70px] h-[30px] bg-rose-400 flex flex-row gap-2 px-2 py-1 "
//             >
//               <FiEdit className="text-white mt-[2px]" />
//               <p className=" text-white mb-1">Edit</p>
//             </button>
//           </div>
//           <hr className=" h-[1.5px] bg-rose-300" />
//           <p className=" text-brown-800">{profileData.shopGSTIN}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { setProfileData } from "../../slices/profileSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  // const profileData = useSelector((state) => state.profile.profileData);
  // const user = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.profileDetails)
  const profileData = user.profileDetails;
  dispatch(setProfileData(profileData)); 
  
 
  // let profileData = null;
  // const decodedToken = jwtDecode(token);
  // profileData = decodedToken.profileDetails;
  // console.log(profileData)

  
  
  
  // console.log("ProfileData", profileData);
  const navigate = useNavigate();

  return (
    <div>
      {!profileData && profileData === undefined ? (
        <div className=" flex flex-col justify-center items-center text-center  gap-3 mt-32 text-3xl text-brown-900">
          <p className="text-rose-400">No Profile Data available</p>
          <p className=" text-2xl">Click here to create profile</p>
          <Link to='/inside-profile'><button className=" max-w-max h-[30px] px-5 text-white rounded-md text-sm shadow-lg  bg-purpule">Create Your Profile</button></Link>

        </div>
      ) : (
        <div className="mt-10 mx-4 lg:mt-16 lg:mx-16">
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-brown-900">
              Your <span className="text-rose-600">profile</span> details
            </h1>

            {/* Section 1 */}
            <div className="flex flex-col gap-3 bg-rose-50 px-6 lg:px-10 py-5 border border-rose-200 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <p className="text-brown-900 text-2xl font-bold">
                  Organization Details
                </p>
                <button
                  onClick={() => {
                    navigate("/dashboard/settings");
                  }}
                  className="rounded-md drop-shadow-md w-[70px] h-[30px] bg-rose-400 flex items-center justify-center gap-2 px-2 py-1"
                >
                  <FiEdit className="text-white mt-[2px]" />
                  <p className="text-white mb-1">Edit</p>
                </button>
              </div>
              <hr className="h-[1px] bg-rose-300" />
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-44">
                <div className="flex flex-col">
                  <p className="text-brown-900 text-xl">Organization Name</p>
                  <p className="text-brown-800">
                    {profileData.organizationName}
                  </p>
                </div>
                <div>
                  <p className="text-brown-900 text-xl">Email</p>
                  <p className="text-brown-800">{profileData.email}</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-3 bg-rose-50 px-6 lg:px-10 py-5 border border-rose-200 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <p className="text-brown-900 text-2xl font-bold">Address</p>
                <button
                  onClick={() => {
                    navigate("/dashboard/settings");
                  }}
                  className="rounded-md drop-shadow-md w-[70px] h-[30px] bg-rose-400 flex items-center justify-center gap-2 px-2 py-1"
                >
                  <FiEdit className="text-white mt-[2px]" />
                  <p className="text-white mb-1">Edit</p>
                </button>
              </div>
              <hr className="h-[1.5px] bg-rose-300" />
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-44">
                <div className="flex flex-col">
                  <p className="text-brown-900 text-xl">Address Line1</p>
                  <p className="text-brown-800">{profileData.addressLine1}</p>
                </div>
                <div>
                  <p className="text-brown-900 text-xl">Address Line2</p>
                  <p className="text-brown-800">{profileData.addressLine2}</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-3 bg-rose-50 px-6 lg:px-10 py-5 border border-rose-200 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <h1 className="text-brown-900 text-2xl font-bold">About</h1>
                <button
                  onClick={() => {
                    navigate("/dashboard/settings");
                  }}
                  className="rounded-md drop-shadow-md w-[70px] h-[30px] bg-rose-400 flex items-center justify-center gap-2 px-2 py-1"
                >
                  <FiEdit className="text-white mt-[2px]" />
                  <p className="text-white mb-1">Edit</p>
                </button>
              </div>
              <hr className="h-[1.5px] bg-rose-300" />
              <p className="text-brown-800">{profileData.shopGSTIN}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
