import { toast } from "react-hot-toast";

import { setLoading, setSignupData, setToken,setUser  } from "../slices/authSlice";
import { apiConnector } from "./apiConnector";
import { endpoints } from "./apis";
import { useNavigate } from "react-router-dom";

const { SIGNUP_API, LOGIN_API, UPDATE_PASSWORD_API } = endpoints;

export function signup(
  fullName,
  email,
  phoneNo,
  password,
  confirmPassword,
  navigate
) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("hello");
      const response = await apiConnector("POST", SIGNUP_API, {
        fullName,
        email,
        phoneNo,
        password,
        confirmPassword,
      });

      console.log("Signup api response", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      } else {
        toast.success("Signup Successfully!");
        dispatch(setUser(response));
        navigate("/login");
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
  };
}

///login
export function login(email, password, navigate) {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...")
    dispatch(setLoading(true));
    console.log("hello");
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("Login API response", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      } else {
        toast.success("Login Successfully");
      }

      dispatch(setToken(response.data.token));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/inside-profile");
    } catch (error) {
      console.log("Login API ERROR............", error);
      toast.error("login Failed");
      navigate("/login");
    }
    dispatch(setLoading(false));
    // toast.dismiss(toastId)
  };
}

//logout

export function logout(navigate) {
  return (dispatch) => {
    // Clear the token in Redux state

    console.log("Me call hogya hu ");
    dispatch(setToken(null));
    // dispatch(setSignupData(null));

    // Clear token from localStorage (if used)
    localStorage.removeItem("token");
    localStorage.removeItem("billData");
    localStorage.removeItem("allBill");
    localStorage.removeItem("profileData");
    localStorage.removeItem("billDatas");
    localStorage.removeItem("user");

    // Optional: Clear any session storage if used
    sessionStorage.clear();
    toast.success("Logged Out");

    // Navigate to the login page or home
    navigate("/login");
  };
}

export function updatePassword(
  newPassword,
  confirmNewPassword,
  email,
  navigate
) {
  return async (dispatch) => {
    try {
      // Call API
      const response = await apiConnector("POST", UPDATE_PASSWORD_API, {

        newPassword,
        confirmNewPassword,
        email,
      });
      console.log("updatePassword API response", response);

      // Handle API response
      if (!response.data.success) {
        throw new Error(response.data.message || "Password update failed.");
      }

      toast.success("Password Updated Successfully");
      navigate("/login");
    } catch (error) {
      console.log("UpdatePassword API ERROR:", error);

      // Display detailed error if available
      toast.error(error.response?.data?.message || "Unable to update Password");
    }
  };
}
