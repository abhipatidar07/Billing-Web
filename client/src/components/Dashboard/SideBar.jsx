// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { jwtDecode } from "jwt-decode";
// import { Link, useLocation } from "react-router-dom";
// import { FaHouseUser } from "react-icons/fa";
// import { FaClipboardList } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import { TbLogout } from "react-icons/tb";
// import ConfirmationModal from "./ConfirmationModal";

// const SideBar = () => {
//   const dispatch = useDispatch();
//   const [activeLink, setActiveLink] = useState(null); // Track active link
//   const [confirmation,setConfirmation] = useState(false);
//   const token = useSelector((state) => state.auth.token);

//   // Decode the token if it exists
//   let email = null;
//   let phoneNo = null;
//   let name = null;
//   let initials = null;
//   if (token) {
//     try {
//       const decodedToken = jwtDecode(token);
//       email = decodedToken.email;
//       phoneNo = decodedToken.phoneNo;
//       name = decodedToken.name;

//       // Extract initials from the name
//       if (name) {
//         const nameParts = name.split(" "); // Split the name by spaces
//         const firstInitial = nameParts[0]?.charAt(0).toUpperCase(); // First letter of the first name
//         const lastInitial = nameParts[1]?.charAt(0).toUpperCase(); // First letter of the last name (if exists)
//         initials = `${firstInitial || ""}${lastInitial || ""}`; // Combine initials
//       }
//     } catch (error) {
//       console.error("Invalid token format:", error);
//     }
//   }
//   const location = useLocation(); // Get current route
//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName); // Set active link when clicked
//   };
//   const handleCloseModal = () => {
//     setConfirmation(false); // Close the modal
//   };
  

//   return (
//     <div>
//       <div className="h-[70px]"></div>
//       <div className=" w-[250px] h-screen bg-pink-500 flex flex-col gap-2 items-center">
//         <div className=" w-[80px] mt-10 h-[80px] rounded-full bg-rose-400 flex justify-center text-center items-center text-3xl text-white shadow-lg border-2 border-pink-50 ">
//           {initials || "?"}
//         </div>
//         <p className="text-2xl text-brown-900">{name}</p>
//         <p className="text-black">{email}</p>
//         <hr className=" w-[210px] my-5 h-[2px] bg-brown-600" />
//         <div className=" flex flex-col gap-8">
//           <Link to="dashboard/my-profile">
//             <div
//               className={`w-[200px] h-[35px] rounded-md flex flex-row px-3 gap-5 items-center shadow-md ${
//                 location.pathname === "/dashboard/my-profile" ||
//                 activeLink === "profile"
//                   ? "bg-rose-500"
//                   : "bg-rose-300"
//               }`}
//               onClick={() => handleLinkClick("profile")}
//             >
//               <FaHouseUser className="text-white text-xl" />
//               <p className="text-white text-xl">Profile</p>
//             </div>
//           </Link>
//           <Link to="dashboard/generate-bill">
//             <div
//               className={`w-[200px] h-[35px] rounded-md flex flex-row px-3 gap-5 items-center shadow-md ${
//                 location.pathname === "/dashboard/generate-bill" ||
//                 activeLink === "generate-bill"
//                   ? "bg-rose-500"
//                   : "bg-rose-300"
//               }`}
//               onClick={() => handleLinkClick("generate-bill")}
//             >
//               <FaClipboardList className="text-white text-xl" />
//               <p className="text-white text-xl">Generate Bill</p>
//             </div>
//           </Link>
//           <Link to="dashboard/settings">
//             <div
//               className={`w-[200px] h-[35px] rounded-md flex flex-row px-3 gap-5 items-center shadow-md ${
//                 location.pathname === "/dashboard/settings" ||
//                 activeLink === "settings"
//                   ? "bg-rose-500"
//                   : "bg-rose-300"
//               }`}
//               onClick={() => handleLinkClick("settings")}
//             >
//               <IoMdSettings className="text-white text-xl" />
//               <p className="text-white text-xl">Settings</p>
//             </div>
//           </Link>
//           <button onClick={()=>setConfirmation(true)}>
//             <div className=" w-[110px] mx-auto h-[35px] rounded-md flex flex-row px-3 gap-2 items-center shadow-md bg-gray-400">
//               <TbLogout className="text-white text-xl" />
//               <p className="text-white text-[16px]">Logout</p>
//             </div>
//           </button>
//           {confirmation && (
//             <ConfirmationModal
//               handleCloseModal={handleCloseModal} // Pass close function to the modal
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };




// export default SideBar;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Link, useLocation } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import ConfirmationModal from "./ConfirmationModal";
import { IoDocumentText } from "react-icons/io5";
import { HiClipboardDocumentList } from "react-icons/hi2";

const SideBar = () => {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(null); // Track active link
  const [confirmation, setConfirmation] = useState(false);
  const token = useSelector((state) => state.auth.token);

  // Decode the token if it exists
  let email = null;
  let phoneNo = null;
  let name = null;
  let initials = null;
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      email = decodedToken.email;
      phoneNo = decodedToken.phoneNo;
      name = decodedToken.name;

      // Extract initials from the name
      if (name) {
        const nameParts = name.split(" "); // Split the name by spaces
        const firstInitial = nameParts[0]?.charAt(0).toUpperCase(); // First letter of the first name
        const lastInitial = nameParts[1]?.charAt(0).toUpperCase(); // First letter of the last name (if exists)
        initials = `${firstInitial || ""}${lastInitial || ""}`; // Combine initials
      }
    } catch (error) {
      console.error("Invalid token format:", error);
    }
  }

  const location = useLocation(); // Get current route
  

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 0);
  };

  // Handle link click
  // const handleLinkClick = (linkName) => {
  //   setActiveLink(linkName); // Set active link when clicked
  // };

  // Close the confirmation modal
  const handleCloseModal = () => {
    setConfirmation(false); // Close the modal
  };

  return (
    <div>
      <div className="h-[50px]"></div>
      <div className="lg:w-[200px] w-screen h-screen bg-gray-500 flex flex-col gap-2 items-center">
        <div className="w-[60px] mt-10 h-[60px] rounded-full bg-rose-400 flex justify-center text-center items-center text-3xl text-white shadow-lg border-2 border-pink-50">
          {initials || "?"}
        </div>
        <p className="text-xl text-white">{name}</p>
        <p className="text-gray-100  text-sm">{email}</p>
        <hr className="w-[180px] my-5 h-[0.5px] bg-gray-200" />
        <div className="flex flex-col gap-3">
          <Link to="dashboard/my-profile">
            <div
              className={`lg:w-[200px] w-[100px] h-[30px]  flex flex-row px-3 gap-3 items-center ${
                location.pathname === "/dashboard/my-profile" ||
                activeLink === "profile"
                  ? "bg-gray-700  border-l-[5px] shadow-md  border-l-white"
                  : "bg-gray-500"
              }`}
              onClick={() => handleLinkClick("profile")}
            >
              <FaHouseUser className="text-white text-sm" />
              <p className="text-white text-sm">Profile</p>
            </div>
          </Link>
          <Link to="dashboard/generate-bill">
            <div
              className={`w-[200px] h-[30px]  flex flex-row px-3 gap-3 items-center  ${
                location.pathname === "/dashboard/generate-bill" ||
                activeLink === "generate-bill"
                  ? "bg-gray-700 border-l-[5px] shadow-md  border-l-white"
                  : "bg-gray-500"
              }`}
              onClick={() => handleLinkClick("generate-bill")}
            >
              <FaClipboardList className="text-white text-sm" />
              <p className="text-white text-sm">Generate Bill</p>
            </div>
          </Link>
          <Link to="dashboard/display-bill">
            <div
              className={`w-[200px] h-[30px]  flex flex-row px-3 gap-3 items-center ${
                location.pathname === "/dashboard/display-bill" ||
                activeLink === "display-bill"
                  ? "bg-gray-700 border-l-[5px] shadow-md   border-l-white"
                  : "bg-gray-500"
              }`}
              onClick={() => handleLinkClick("display-bill")}
            >
              <IoDocumentText className="text-white text-[15px]" />
              <p className="text-white text-sm">Current Bill</p>
            </div>
          </Link>
          <Link to="dashboard/all-bills">
            <div
              className={`w-[200px] h-[30px]  flex flex-row px-3 gap-3 items-center ${
                location.pathname === "/dashboard/all-bills" ||
                activeLink === "all-bills"
                  ? "bg-gray-700 border-l-[5px] shadow-md   border-l-white"
                  : "bg-gray-500"
              }`}
              onClick={() => handleLinkClick("all-bills")}
            >
              <HiClipboardDocumentList className="text-white text-[15px]" />
              <p className="text-white text-sm">All Bills</p>
            </div>
          </Link>
          <Link to="dashboard/settings">
            <div
              className={`w-[200px] h-[30px]  flex flex-row px-3 gap-3 items-center ${
                location.pathname === "/dashboard/settings" ||
                activeLink === "settings"
                  ? "bg-gray-700 border-l-[5px] shadow-md   border-l-white"
                  : "bg-gray-500"
              }`}
              onClick={() => handleLinkClick("settings")}
            >
              <IoMdSettings className="text-white text-sm" />
              <p className="text-white text-sm">Settings</p>
            </div>
          </Link>
          <hr className="w-[180px] my-4 mx-auto h-[0.5px] bg-gray-200" />
          <button onClick={() => {
             console.log("Setting confirmation to true");
            setConfirmation(true)
            }}>
            <div className="w-[200px] mx-auto h-[30px] hover:bg-gray-600 flex flex-row px-3 gap-2 items-center hover:border-l-[5px] hover:border-l-white hover:shadow-md">
              <TbLogout className="text-white text-sm" />
              <p className="text-white text-[14px]">Logout</p>
            </div>
          </button>

          {confirmation && (
            <ConfirmationModal
              handleCloseModal={handleCloseModal} // Pass close function to the modal
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

