import React from "react";
import Footer from "../components/common/Footer";

const ContactUs = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center lg:mt-10 mt-28 lg:mb-0 mb-10">
      <div className="bg-white shadow-lg rounded-lg p-8 lg:w-2/3 w-full max-w-4xl mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch with <span className="text-blue-500">HisabKitab</span>
          </h1>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you! Whether you have a question about our software, need assistance, 
            or want to give feedback, we’re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Address</h2>
            <p className="text-gray-600">
              B006/00454 GTB Nagar,
              <br />
              Mohali, Punjab,
              <br />
              India
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600">
              <a
                href="mailto:contact@hisabkitab.com"
                className="text-blue-500 hover:underline"
              >
                contact@hisabkitab.com
              </a>
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
            <p className="text-gray-600">+91 8319737097</p>
            <p className="text-gray-600">+91 8319737097</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            <i className="fas fa-info-circle text-blue-500"></i> Our team is
            available Monday to Friday, 9 AM - 6 PM.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
