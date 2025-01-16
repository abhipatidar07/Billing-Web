// import React from "react";
// // import img from "../assets/images/lnder-removebg-preview.png"
// import MainBtn from "../components/common/MainBtn";
// import { Link } from "react-router-dom";
// import img1 from "../assets/images/himg.png";
// import img2 from "../assets/images/Homepage2.png";


// const HomePage = () => {
//   return (
//     <div>
//       <div className="lg:w-11/12 mx-auto">
//         <div className=" flex lg:flex-row flex-col lg:gap-10 gap-5">
//           <div className="lg:text-5xl text-3xl lg:text-start text-center text-brown-800  lg:gap-3 gap-2 flex justify-center lg:mx-32 mx-5 lg:mt-36 mt-20 lg:mb-20 my-8 flex-col">
//             <h1>
//               "Simplify Your <span className=" text-rose-600">Billing</span>
//             </h1>
//             <h1>,Simplify Your Life - </h1>
//             <h1>Welcome to</h1>
//             <h1>
//               {" "}
//               <span className=" text-rose-600">HisabKitab!</span>"
//             </h1>
//           </div>
//           <div className="flex justify-center items-center lg:mt-24  lg:mr-14 mt-4">
//             <img src={img1} width={500} height={500} alt="" />
//           </div>
//         </div>
//       </div>
//       {/*Section 2 */}
//       <div className=" w-full max-h-max bg-brown-300">
//         <div className=" w-11/12 mx-auto content-center justify-center text-center flex flex-col gap-10 py-20">
//           <Link to={"/profiledetail"}>
//             <div className=" flex justify-center ">
//               <MainBtn text={"JOIN HISABKITAB"} />
//             </div>
//           </Link>
//           <p className=" text-5xl text-brown-900">
//             Generate Your <span className=" text-rose-600">Bills</span> in Just
//             a Few Clicks!
//           </p>
//           <p className="text-brown-800 text-xl max-w-[1200px] mx-auto">
//             At HisabKitab, we aim to simplify the billing process for
//             businesses, freelancers, and individuals. With our easy-to-use
//             platform, you can create and manage your bills with ease. Say
//             goodbye to manual calculations and hello to a streamlined, automated
//             experience.
//           </p>
//           <img src={img2} alt="" />
//         </div>
//       </div>
//       {/*Section 3 */}
//       <div className=" w-full max-h-max bg-white">
//         <div className=" w-11/12 mx-auto content-center justify-center text-center flex flex-col gap-10 py-20">
//           <p className=" text-5xl text-brown-900">
//             Why Choose<span className=" text-rose-600"> HisabKitab</span>?
//           </p>

//           <div className=" flex flex-row w-[900px] mx-auto gap-16 max-h-max px-10 py-10 rounded-full border-2 border-orange ">
//             <div className=" w-[60px] h-[60px] bg-white rounded-full border-2 border-orange flex justify-center content-center items-center ">
//             <div className=" w-[50px] h-[50px] bg-orange rounded-full flex justify-center text-center text-3xl text-white content-center pt-1 font-bold"> 1</div>
//             </div>
//             <div className=" flex flex-col justify-start text-start">
//               <p className=" text-3xl text-orange">User-Friendly Interface</p>
//               <p className=" text-xl text-brown-800">
//                 Create invoices with a few simple steps. No technical skills
//                 needed.{" "}
//               </p>
//             </div>
//           </div>

//           <div className=" flex flex-row w-[900px] mx-auto  justify-between gap-16 max-h-max px-10 py-10 rounded-full border-2 border-blue">
           
//             <div className=" flex flex-col justify-start text-start">
//               <p className=" text-3xl text-blue">Fully Customizable</p>
//               <p className=" text-xl text-brown-800">
//               Tailor your invoices and bills with your company’s logo, and details.
//               </p>
//             </div>
//             <div className=" w-[60px] h-[60px] bg-white rounded-full border-2 border-blue flex justify-center content-center items-center ">
//               <div className=" w-[50px] h-[50px] bg-blue rounded-full flex justify-center text-center text-3xl text-white content-center pt-1 font-bold"> 2</div>
//             </div>
//           </div>

//           <div className=" flex flex-row w-[900px] mx-auto  justify-between gap-16 max-h-max px-10 py-10 rounded-full border-2 border-yellow">
//            <div className=" w-[60px] h-[60px] bg-white rounded-full border-2 border-yellow flex justify-center content-center items-center ">
//              <div className=" w-[50px] h-[50px] bg-yellow rounded-full flex justify-center text-center text-3xl text-white content-center pt-1 font-bold"> 3</div>
//            </div>
//            <div className=" flex flex-col justify-start text-start">
//              <p className=" text-3xl text-yellow">Save Time & Effort</p>
//              <p className=" text-xl text-brown-800">
//                Automated calculations for tax, discounts , so you can generate bills quickly.
//              </p>
//            </div>
//          </div>
//          <div className=" h-[5px]"></div>

         

//         </div>

//         <div className="w-full h-[400px] bg-brown-300 relative">
//         <div className=" flex flex-row w-[900px] mx-auto  justify-between gap-16 max-h-max px-10 py-10 rounded-full border-2 border-purpule bg-white absolute -top-[65px] left-[390px] shadow-lg  ">
           
//            <div className=" flex flex-col justify-start text-start">
//              <p className=" text-3xl text-purpule">Cloud-Based</p>
//              <p className=" text-xl text-brown-800">
//              Access your bills anytime, anywhere. Your data is securely stored in the cloud.
//              </p>
//            </div>
//            <div className=" w-[60px] h-[60px] bg-white rounded-full border-2 border-purpule flex justify-center content-center items-center ">
//              <div className=" w-[50px] h-[50px] bg-purpule rounded-full flex justify-center text-center text-3xl text-white content-center pt-1 font-bold"> 4</div>
//            </div>
//          </div>
//         </div>
//       </div>



//     </div>
//   );
// };

// export default HomePage;



// import React from "react";
// import MainBtn from "../components/common/MainBtn";
// import { Link } from "react-router-dom";
// import img1 from "../assets/images/himg.png";
// import img2 from "../assets/images/Homepage2.png";

// const HomePage = () => {
//   return (
//     <div>
//       {/* Section 1 */}
//       <div className="lg:w-11/12 mx-auto px-4">
//         <div className="flex flex-col lg:flex-row lg:gap-10 gap-5">
//           <div className="text-center lg:text-start lg:mx-32 mx-5 lg:mt-36 mt-20 lg:mb-20 my-8 flex flex-col gap-2">
//             <h1 className="text-3xl lg:text-5xl text-brown-800">
//               "Simplify Your <span className="text-rose-600">Billing</span>
//             </h1>
//             <h1 className="text-3xl lg:text-5xl text-brown-800">
//               , Simplify Your Life -
//             </h1>
//             <h1 className="text-3xl lg:text-5xl text-brown-800">Welcome to</h1>
//             <h1 className="text-3xl lg:text-5xl text-brown-800">
//               <span className="text-rose-600">HisabKitab!</span>"
//             </h1>
//           </div>
//           <div className="flex justify-center items-center lg:mt-24 mt-4">
//             <img
//               src={img1}
//               alt="Billing illustration"
//               className="w-full max-w-[500px] lg:max-w-[600px] object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="w-full bg-brown-300 py-20">
//         <div className="w-11/12 mx-auto flex flex-col gap-10 text-center">
//           <Link to="/profiledetail">
//             <MainBtn text="JOIN HISABKITAB" />
//           </Link>
//           <p className="text-2xl lg:text-5xl text-brown-900">
//             Generate Your <span className="text-rose-600">Bills</span> in Just a
//             Few Clicks!
//           </p>
//           <p className="text-brown-800 text-sm lg:text-xl max-w-[1200px] mx-auto">
//             At HisabKitab, we aim to simplify the billing process for
//             businesses, freelancers, and individuals. With our easy-to-use
//             platform, you can create and manage your bills with ease. Say
//             goodbye to manual calculations and hello to a streamlined, automated
//             experience.
//           </p>
//           <img
//             src={img2}
//             alt="Generate bills easily"
//             className="w-full max-w-[700px] mx-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="w-full bg-white py-20">
//         <div className="w-11/12 mx-auto text-center flex flex-col gap-10">
//           <p className="text-2xl lg:text-5xl text-brown-900">
//             Why Choose<span className="text-rose-600"> HisabKitab</span>?
//           </p>

//           {/* Features Section */}
//           <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 lg:justify-between max-w-[900px] mx-auto">
//             {[
//               {
//                 number: "1",
//                 title: "User-Friendly Interface",
//                 description:
//                   "Create invoices with a few simple steps. No technical skills needed.",
//                 color: "orange",
//               },
//               {
//                 number: "2",
//                 title: "Fully Customizable",
//                 description:
//                   "Tailor your invoices and bills with your company’s logo and details.",
//                 color: "blue",
//               },
//               {
//                 number: "3",
//                 title: "Save Time & Effort",
//                 description:
//                   "Automated calculations for tax and discounts, so you can generate bills quickly.",
//                 color: "yellow",
//               },
//               {
//                 number: "4",
//                 title: "Cloud-Based",
//                 description:
//                   "Access your bills anytime, anywhere. Your data is securely stored in the cloud.",
//                 color: "purple",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col lg:flex-row items-center gap-5 p-5 border-2 rounded-lg border-${feature.color}`}
//               >
//                 <div
//                   className={`w-[60px] h-[60px] rounded-full flex items-center justify-center border-2 border-${feature.color}`}
//                 >
//                   <div
//                     className={`w-[50px] h-[50px] bg-${feature.color} text-white flex items-center justify-center rounded-full font-bold text-2xl`}
//                   >
//                     {feature.number}
//                   </div>
//                 </div>
//                 <div className="flex flex-col text-center lg:text-start">
//                   <p
//                     className={`text-xl lg:text-2xl text-${feature.color} font-semibold`}
//                   >
//                     {feature.title}
//                   </p>
//                   <p className="text-sm lg:text-lg text-brown-800">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import MainBtn from "../components/common/MainBtn";
import { Link } from "react-router-dom";
import img1 from "../assets/images/himg.png";
import img2 from "../assets/images/Homepage2.png";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="lg:w-11/12 mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:gap-10 gap-5">
          <div className="text-center lg:text-start lg:mx-32 mx-5 lg:mt-24 mt-20 lg:mb-20 my-8 flex flex-col gap-2">
            <h1 className="text-3xl lg:text-5xl text-brown-800">
              "Simplify Your <span className="text-rose-600">Billing</span>
            </h1>
            <h1 className="text-3xl lg:text-5xl text-brown-800">
            ,Simplify Your Life -
            </h1>
            <h1 className="text-3xl lg:text-5xl text-brown-800">Welcome to</h1>
            <h1 className="text-3xl lg:text-5xl text-brown-800">
              <span className="text-rose-600">HisabKitab!</span>"
            </h1>
          </div>
          <div className="flex justify-center items-center lg:mt-10 mt-4">
            <img
              src={img1}
              alt="Billing illustration"
              className="w-full max-w-[500px] lg:max-w-[600px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full bg-brown-300 py-20">
        <div className="w-11/12 mx-auto flex flex-col gap-10 text-center">
          <Link className="flex mx-auto" to="/profiledetail">
            <MainBtn text="JOIN HISABKITAB" />
          </Link>
          <p className="text-2xl lg:text-5xl text-brown-900">
            Generate Your <span className="text-rose-600">Bills</span> in Just a
            Few Clicks!
          </p>
          <p className="text-brown-800 text-sm lg:text-xl max-w-[1200px] mx-auto">
            At HisabKitab, we aim to simplify the billing process for
            businesses, freelancers, and individuals. With our easy-to-use
            platform, you can create and manage your bills with ease. Say
            goodbye to manual calculations and hello to a streamlined, automated
            experience.
          </p>
          <img
            src={img2}
            alt="Generate bills easily"
            className="w-full max-w-[700px] mx-auto object-contain"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full bg-white py-20">
        <div className="w-11/12 mx-auto text-center flex flex-col gap-10">
          <p className="text-2xl lg:text-5xl text-brown-900">
            Why Choose<span className="text-rose-600"> HisabKitab</span>?
          </p>

          {/* Features Section */}
          <div className="flex flex-col gap-10 lg:gap-16">
            {[
              {
                number: "1",
                title: "User-Friendly Interface",
                description:
                  "Create invoices with a few simple steps. No technical skills needed.",
                color: "orange",
              },
              {
                number: "2",
                title: "Fully Customizable",
                description:
                  "Tailor your invoices and bills with your company’s logo and details.",
                color: "blue",
              },
              {
                number: "3",
                title: "Save Time & Effort",
                description:
                  "Automated calculations for tax and discounts, so you can generate bills quickly.",
                color: "yellow",
              },
              {
                number: "4",
                title: "Cloud-Based",
                description:
                  "Access your bills anytime, anywhere. Your data is securely stored in the cloud.",
                color: "purpule",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:w-[800px] lg:mx-auto lg:flex-row items-center justify-between lg:justify-start gap-5 lg:gap-16 p-5 border-2 lg:rounded-full rounded-lg border-${feature.color}`}
              >
                <div
                  className={`w-[60px] h-[60px] rounded-full flex items-center justify-center border-2 border-${feature.color}`}
                >
                  <div
                    className={`w-[50px] h-[50px] bg-${feature.color} text-white flex items-center justify-center rounded-full font-bold text-2xl`}
                  >
                    {feature.number}
                  </div>
                </div>
                <div className="text-center lg:text-start">
                  <p
                    className={`text-xl lg:text-2xl text-${feature.color} font-semibold`}
                  >
                    {feature.title}
                  </p>
                  <p className="text-sm lg:text-lg text-brown-800">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
