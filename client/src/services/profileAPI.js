import { toast } from "react-hot-toast";

import { setLoading, setProfileData } from "../slices/profileSlice";
import { apiConnector } from "./apiConnector";
import { endpoints } from "./apis";
import { useNavigate } from "react-router-dom";

const { UPDATE_PROFILE_API } = endpoints;

export function updateProfile(
  organizationName,
  email,
  addressLine1,
  addressLine2,
  logo,
  shopGSTIN,
  about,
  navigate
) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", UPDATE_PROFILE_API, {
        organizationName,
        email,
        addressLine1,
        addressLine2,
        logo,
        shopGSTIN,
        about,
      });

      console.log("profiledetail api response", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      } else {
        dispatch(setProfileData(response.data.profile));
        toast.success("Profile detail saved!");
        navigate("/dashboard/generate-bill");
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log("PROFILE API ERROR............", error);
      toast.error("Failed to save details");
      navigate("/profileDetail");
    }
  };
}
