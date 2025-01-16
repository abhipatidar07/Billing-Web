// import { setBillData } from "../slices/billSlice";
// import { apiConnector } from "./apiConnector";
// import { endpoints } from "./apis";
// import toast from "react-hot-toast";

// const { BILL_API } = endpoints;

// export function createBill(formData, total, grandTotal) {
//   try {
//     return async (dispatch) => {
//         const { customerName, customerAddress, date, items, tax } = formData;
//         const response = await apiConnector("POST", BILL_API, {
//           customerName,
//           customerAddress,
//           date,
//           items,
//           tax,
//           total,
//           grandTotal
//         });
//         if (!response.data.success) {
//             throw new Error(response.data.message);
//           } else {
//             dispatch(setBillData(response));
//             toast.success("Bill created successfully");
//             // navigate("/dashboard/generate-bill");
//         }
//       };
//   } catch (error) {
//     console.log("BILL API ERROR............", error);
//     toast.error("Failed to create bill");
//     // navigate("/profileDetail");
//   }
// }

import { useSelector } from "react-redux";
import { setAllBill, setBillData } from "../slices/billSlice";
import { apiConnector } from "./apiConnector";
import { endpoints } from "./apis";
import toast from "react-hot-toast";
import  {jwtDecode} from "jwt-decode";
import AllBills from "../components/Dashboard/AllBills";



const { BILL_API,GET_ALL_BILL_API } = endpoints;

export function createBill(formData, total, grandTotal,navigate) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found");
            toast.error("Authentication failed. Please log in.");
            return;
        }
    try {
      const decodedToken = jwtDecode(token); // Decode the JWT to extract the userId
      const email = decodedToken.email; // Adjust based on your token structure
      const { customerName, customerAddress, items,date, tax } = formData;
      // const att = "patidarabhishek831@gmail.com"

      // Send API request
      const response = await apiConnector("POST", BILL_API, {
        customerName,
        customerAddress,
        date,
        items,
        tax,
        total,
        grandTotal,
       email
      },
   );

      // Check for success in response
      if (response.data && response.data.success) {
        dispatch(setBillData(response.data)); // Dispatch the data to Redux store
        toast.success("Bill created successfully");
        navigate("/dashboard/display-bill"); // Uncomment if navigation is needed
      } else {
        throw new Error(response.data.message || "Failed to create bill");
      }
    } catch (error) {
      console.error("BILL API ERROR:", error.message);
      toast.error(error.message || "Failed to create bill");
      navigate("dashboard/generate-bill"); // Uncomment if navigation is needed
    }
  };
}

// export function getBills(info,navigate){
//   const {email} = info;
//    return async (dispatch) => {
//     try {
//        const response = await apiConnector("POST",GET_ALL_BILL_API,{
//         email
//        })
//        if(response.data.success){
//         toast.success("All bills fetched");
//         console.log(response);  
//         dispatch(AllBills(response));
//        }else{
//         throw new Error(response.data.message || "Failed to create bill");
//        }
//     } catch (error) {
//       console.error("FETCH BILL API ERROR:", error.message);
//       toast.error(error.message || "Failed to fetch bills");
//       // navigate("dashboard/generate-bill"); // Uncomment if navigation is needed
//     }
//    };
// } 


export function getBills(info, navigate) {
  const { email } = info;
  return async (dispatch) => {
    //dispatch(setLoading(true)); // Set loading to true while fetching
    try {
      const response = await apiConnector('POST', GET_ALL_BILL_API, { email });
      if (response.data.success) {
        toast.success('All bills fetched');
        console.log(response);
        dispatch(setAllBill(response.data.bills)); // Dispatch fetched bills
      } else {
        throw new Error(response.data.message || 'Failed to fetch bills');
      }
    } catch (error) {
      console.error('FETCH BILL API ERROR:', error.message);
      toast.error(error.message || 'Failed to fetch bills');
    }
    
    // finally {
    //   dispatch(setLoading(false)); // Set loading to false after fetching
    // }
  };
}