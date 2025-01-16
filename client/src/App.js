import "./App.css";
import Navbar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import PrivateRoute from "./components/common/PrivateRoute";
import GenerateBill from "./components/Dashboard/GenerateBill";
import Settings from "./components/Dashboard/Settings";
import ProfileDetail from "./pages/ProfileDetail";
import InsideProfileDetail from "./pages/InsideProfileDetail";
import DisplayBill from "./components/Dashboard/DisplayBill";
import AllBills from "./components/Dashboard/AllBills";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/update-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/generate-bill" element={<GenerateBill />} />
          <Route path="dashboard/settings" element={<Settings />} />
          <Route path="dashboard/display-bill" element={<DisplayBill />} />
          <Route path="dashboard/all-bills" element={<AllBills />} />
        </Route>
        <Route path="/profiledetail" element={<ProfileDetail />} />
        <Route path="/inside-profile" element={<InsideProfileDetail />} />
      </Routes>
    </div>
  );
}

export default App;
