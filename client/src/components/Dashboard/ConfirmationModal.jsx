// import React from 'react'
// import { TbLogout } from "react-icons/tb";
// import { VscCloseAll } from "react-icons/vsc";

// const ConfirmationModal = (handleCloseModal) => {
//   return (
//     <div>
//         <div className=' flex flex-col px-4 justify-center content-center text-center py-4 absolute w-[300px] h-[150px] bg-gray-400 rounded-xl'>
//            <p className=' text-white text-xl'>Are you sure </p>
//            <p className=' text-white text-xl'>you want to <span className='text-xl text-rose-600'> logout</span>?</p>
//            <div className=' flex flex-row gap-4 justify-center mt-5'>
//             <button className=' w-[100px] h-[35px] bg-gray-800 text-white flex flex-row gap-2 rounded-md shadow-md content-center justify-center text-center px-3   '><TbLogout className='my-auto text-xl'/><p className=' my-auto'>Logout</p></button>
//             <button className=' w-[100px] h-[35px] bg-gray-600 text-white flex flex-row gap-2 rounded-md shadow-md content-center  justify-center text-center px-3  '><VscCloseAll className=' my-auto text-xl'/><p className=' my-auto'>Cancle</p></button>
//            </div>
//         </div>

//     </div>
//   )
// }

// export default ConfirmationModal
import React from "react";
import { TbLogout } from "react-icons/tb";
import { VscCloseAll } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { logout } from "../../services/authAPI";
import { useNavigate } from "react-router-dom";

const ConfirmationModal = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      {/* Modal */}
      <div className="flex flex-col px-4 justify-center content-center text-center py-4 w-[300px] h-[150px] bg-gray-400 border-2 border-white shadow-lg rounded-xl">
        <p className="text-white text-xl">Are you sure</p>
        <p className="text-white text-xl">
          you want to <span className="text-xl text-rose-600">logout</span>?
        </p>
        <div className="flex flex-row gap-4 justify-center mt-5">
          <button
            onClick={() => dispatch(logout(navigate))}
            className="w-[100px] h-[35px] bg-gray-800 text-white flex flex-row gap-2 rounded-md shadow-md content-center justify-center text-center px-3"
          >
            <TbLogout className="my-auto text-xl" />
            <p className="my-auto">Logout</p>
          </button>
          <button
            className="w-[100px] h-[35px] bg-gray-600 text-white flex flex-row gap-2 rounded-md shadow-md content-center justify-center text-center px-3"
            onClick={handleCloseModal} // Close modal on cancel
          >
            <VscCloseAll className="my-auto text-xl" />
            <p className="my-auto">Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
