// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// // import MainBtn from './common/MainBtn'
// import { FaUserCircle } from "react-icons/fa";
// import { logout } from "../../services/authAPI";

// const Navbar = () => {
//   const token = useSelector((state) => state.auth.token);
//   // const token = useSelector((state) => state.auth.token);
// //console.log("Navbar token:", token); // Debug log

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   // console.log(token)
//   return (
//     <div className=" fixed top-0 left-0  z-50 bg-nav lg:w-full max-w-screen-sm  h-[50px] flex flex-row lg:justify-between content-center items-center px-10">
//       <Link to={"/"}>
//         <h className=" text-2xl font-bold text-brown-100 font-serif">
//           HISABKITAB
//         </h>
//       </Link>

//       <ul className=" flex flex-row gap-5 text-brown-100 text-sm lg:visible invisible">
//         <Link to={"/"}> Home </Link>
//         <Link to={"/about"}> About </Link>
//         <Link to={"/contact"}>Contact us </Link>
//         <Link to={"/dashboard"}> Dashboard</Link>
//       </ul>
//       <div className=" flex flex-row gap-5">
        
//         { !token ? (
//           <div className="flex flex-row gap-5">
//             <Link to="/login">
//               <button className=" w-[80px] h-[30px] bg-brown-200 rounded-full font-bold text-brown-800">
//                 Login
//               </button>
//             </Link>
//             <Link to="/signup">
//               <button className=" w-[80px] h-[30px] bg-brown-200 rounded-full font-bold text-brown-800">
//                 Signup
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="relative inline-block">
//             <button onClick={toggleDropdown}>
//               <FaUserCircle className=" text-white text-3xl" />
//             </button>
//             {isOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white  shadow-lg rounded-md">
//                 <ul className="py-2">
//                   <Link to="/dashboard/my-profile">
//                   <li className="px-4 py-2 text-brown-900 hover:bg-gray-100 cursor-pointer">
//                     Dashboard
//                   </li>
//                   </Link>
//                   {/* <li className="px-4 py-2 text-brown-900 hover:bg-gray-100 cursor-pointer">
//                     Profile
//                   </li> */}
                
//                   <li onClick={()=>{
//                     dispatch(logout(navigate))
//                     setIsOpen(false)

//                   } 
//                   } className="px-4 py-2 text-brown-900 hover:bg-gray-100 cursor-pointer">
//                     Logout
//                   </li>
                
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { logout } from "../../services/authAPI";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FcAlarmClock } from "react-icons/fc";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // Dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className="fixed top-0 left-0 z-50 bg-gray-600 w-full h-[50px] flex items-center px-5 lg:px-10 shadow-md">
      
      <Link to={"/"} className="lg:text-2xl  font-bold text-white font-serif">
        HISABKITAB
      </Link>

      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden ml-auto text-white text-2xl"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row gap-5 lg:ml-[280px] text-white text-sm absolute lg:static top-[50px] left-0 w-full lg:w-auto bg-gray-600 lg:bg-transparent p-5 lg:p-0`}
      >
        <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
          <li className="hover:underline cursor-pointer">Home</li>
        </Link>
        <Link to={"/about"} onClick={() => setIsMenuOpen(false)}>
          <li className="hover:underline cursor-pointer">About</li>
        </Link>
        <Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </Link>
        <Link to={"/dashboard"} onClick={() => setIsMenuOpen(false)}>
          <li className="hover:underline cursor-pointer">Dashboard</li>
        </Link>
      </ul>

      <div className="flex gap-5 items-center ml-auto">
        {!token ? (
          <div className="flex flex-row lg:gap-5 gap-2">
            <Link to="/login">
              <button className="lg:w-[60px] w-[50px] h-[25px] text-xs lg:text-xs lg:h-[30px] bg-gray-800 rounded-md lg:font-semibold text-center justify-center flex items-center text-white border-[1.5px] border-gray-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="lg:w-[60px] w-[50px] h-[25px] lg:h-[30px] text-xs lg:text-xs  bg-gray-800 rounded-md  lg:font-semibold border-[1.5px] border-gray-300 text-white">
                Signup
              </button>
            </Link>
          </div>
        ) : (
          <div className="relative inline-block">
            <button onClick={toggleDropdown}>
              <FaUserCircle className="text-white text-3xl" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <ul className="py-2">
                  <Link to="/dashboard/my-profile">
                    <li
                      className="px-4 py-2 text-brown-900 flex flex-row gap-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <RiDashboardHorizontalFill className="mt-[4px]"/>
                      Dashboard
                    </li>
                  </Link>
                  <li
                    onClick={() => {
                      dispatch(logout(navigate));
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-brown-900 flex flex-row gap-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <TbLogout className="mt-[5px]"/>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

