import React from 'react';
import photo1 from "../assets/images/Myphoto.jpg"
import Footer from '../components/common/Footer';
import aka from "../assets/images/Aka.jpg"

const About = () => {
  return (
    <div>
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brown-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about HisabKitab and what drives us to make billing easier and more efficient.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-lg text-gray-700">
            HisabKitab is a cutting-edge billing software designed to simplify the process of managing bills for businesses of all sizes. Our platform offers a seamless and efficient experience for generating, managing, and tracking invoices. With a user-friendly interface and powerful features, we aim to make billing a hassle-free task.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gray-100 shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At HisabKitab, our mission is to empower businesses by providing them with a reliable and easy-to-use billing solution. We strive to eliminate the complexities of traditional billing processes and provide our users with real-time insights into their financial transactions. Our goal is to enable businesses to focus on what matters most—growing their business.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src={photo1} alt="Team Member 1" />
              <h3 className="text-xl font-semibold text-gray-900">Abhishek Patidar</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-your-image2.jpg" alt="Team Member 2" />
              <h3 className="text-xl font-semibold text-gray-900">Ashutosh Soni</h3>
              <p className="text-gray-600">Chief Operating Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src={aka} alt="Team Member 3" />
              <h3 className="text-xl font-semibold text-gray-900">Aakanksha Dubey</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Have questions or want to learn more about our services? Reach out to us, and we'll be happy to assist you.
          </p>
          <a href="mailto:support@hisabkitab.com" className="inline-block mt-6 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600">
            Contact Us
          </a>
        </section>
      </div>
     
    </div>
    <Footer/>
    </div>
  );
};

export default About;
