// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getBills } from '../../services/billAPI';

// const AllBills = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [info, setInfo] = useState({ email: '' });
//   const { email } = info;

//   const billData = useSelector((state) => state.bill.billData); // Access billData from Redux store
//   const loading = useSelector((state) => state.bill.loading); // Access loading state

//   const changeHandler = (e) => {
//     setInfo((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(getBills(info, navigate));
//   };

//   return (
//     <div>
//       <div className='text-brown-900 text-3xl'>
//         <p>
//           Enter your <span>Email</span> to get all previous <span>Bills</span>
//         </p>
//         <form onSubmit={submitHandler}>
//           <label>
//             <p className='text-brown-800 text-xl'>
//               Email<span className='text-rose-600'>*</span>
//             </p>
//             <input
//               required
//               type='text'
//               name='email'
//               value={email}
//               placeholder='Enter your email'
//               onChange={changeHandler}
//               className='border-[1px] border-black rounded-md'
//             />
//           </label>
//           <button type='submit' disabled={loading}>
//             {loading ? 'Loading...' : 'Get Bills'}
//           </button>
//         </form>
//       </div>

//       {/* Displaying fetched bills */}
//       <div>
//         {billData && billData.length > 0 ? (
//           billData.map((bill, index) => (
//             <div
//               key={index}
//               style={{
//                 maxWidth: '800px',
//                 margin: 'auto',
//                 padding: '20px',
//                 border: '1px solid #ccc',
//                 borderRadius: '10px',
//                 fontFamily: 'Arial, sans-serif',
//               }}
//             >
//               <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Invoice</h2>
//               <div style={{ marginBottom: '20px' }}>
//                 <strong>Customer Details:</strong>
//                 <p>Name: {bill.customerName}</p>
//                 <p>Address: {bill.customerAddress}</p>
//                 <p>Date: {new Date(bill.date).toLocaleDateString()}</p>
//               </div>

//               <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                 <thead>
//                   <tr style={{ borderBottom: '2px solid #ccc' }}>
//                     <th style={{ textAlign: 'left', padding: '8px' }}>Item</th>
//                     <th style={{ textAlign: 'right', padding: '8px' }}>Quantity</th>
//                     <th style={{ textAlign: 'right', padding: '8px' }}>Price</th>
//                     <th style={{ textAlign: 'right', padding: '8px' }}>Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {bill.items.map((item, idx) => (
//                     <tr key={idx}>
//                       <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
//                         {item.name}
//                       </td>
//                       <td
//                         style={{
//                           padding: '8px',
//                           textAlign: 'right',
//                           borderBottom: '1px solid #eee',
//                         }}
//                       >
//                         {item.quantity}
//                       </td>
//                       <td
//                         style={{
//                           padding: '8px',
//                           textAlign: 'right',
//                           borderBottom: '1px solid #eee',
//                         }}
//                       >
//                         ₹{Number(item.price).toFixed(2)}
//                       </td>
//                       <td
//                         style={{
//                           padding: '8px',
//                           textAlign: 'right',
//                           borderBottom: '1px solid #eee',
//                         }}
//                       >
//                         ₹{(item.quantity * Number(item.price)).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <div style={{ marginTop: '20px', textAlign: 'right' }}>
//                 <p>
//                   <strong>Subtotal:</strong> ₹{Number(bill.total).toFixed(2)}
//                 </p>
//                 <p>
//                   <strong>Tax:</strong> ₹{Number(bill.tax || 0).toFixed(2)}
//                 </p>
//                 <p>
//                   <strong>Grand Total:</strong> ₹{Number(bill.grandTotal).toFixed(2)}
//                 </p>
//               </div>

//               <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '14px' }}>
//                 Thank you for your business!
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No bills found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllBills;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getBills } from '../../services/billAPI';
// import { toPng } from 'html-to-image';

// const AllBills = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [info, setInfo] = useState({ email: '' });
//   const { email } = info;

//   const billData = useSelector((state) => state.bill.billData); // Access billData from Redux store
//   const loading = useSelector((state) => state.bill.loading); // Access loading state

//   const changeHandler = (e) => {
//     setInfo((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(getBills(info, navigate));
//   };

//   const downloadImage = (billId) => {
//     const billElement = document.getElementById(`bill-${billId}`);
//     toPng(billElement)
//       .then((dataUrl) => {
//         const link = document.createElement('a');
//         link.download = `bill-${billId}.png`;
//         link.href = dataUrl;
//         link.click();
//       })
//       .catch((err) => {
//         console.error('Error generating image:', err);
//       });
//   };

//   return (
//     <div>
//       <div className='text-brown-900 text-3xl'>
//         <p>
//           Enter your <span>Email</span> to get all previous <span>Bills</span>
//         </p>
//         <form onSubmit={submitHandler}>
//           <label>
//             <p className='text-brown-800 text-xl'>
//               Email<span className='text-rose-600'>*</span>
//             </p>
//             <input
//               required
//               type='text'
//               name='email'
//               value={email}
//               placeholder='Enter your email'
//               onChange={changeHandler}
//               className='border-[1px] border-black rounded-md'
//             />
//           </label>
//           <button type='submit' disabled={loading}>
//             {loading ? 'Loading...' : 'Get Bills'}
//           </button>
//         </form>
//       </div>

//       {/* Displaying fetched bills */}
//       <div className=' my-10 flex flex-col gap-10'>
//         {billData && billData.length > 0 ? (
//           billData.map((bill, index) => (
//             <div
//               key={index}
//               id={`bill-${bill.id}`}
//               style={{
//                 maxWidth: '800px',
//                 margin: 'auto',
//                 padding: '20px',
//                 border: '1px solid #ccc',
//                 borderRadius: '10px',
//                 fontFamily: 'Arial, sans-serif',
//               }}
//               className=' w-[1600px]'
//             >
//               <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Invoice</h2>
//               <div style={{ marginBottom: '20px' }}>
//                 <strong>Customer Details:</strong>
//                 <p>Name: {bill.customerName}</p>
//                 <p>Address: {bill.customerAddress}</p>
//                 <p>Date: {new Date(bill.date).toLocaleDateString()}</p>
//               </div>

//               <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                 <thead>
//                   <tr style={{ borderBottom: '2px solid #ccc' }}>
//                     <th style={{ textAlign: 'left', padding: '8px' }}>Item</th>
//                     <th style={{ textAlign: 'right', padding: '8px' }}>Quantity</th>
//                     <th style={{ textAlign: 'right', padding: '8px' }}>Price</th>
//                     <th style={{ textAlign: 'right', padding: '8px' }}>Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {bill.items.map((item, idx) => (
//                     <tr key={idx}>
//                       <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
//                         {item.name}
//                       </td>
//                       <td
//                         style={{
//                           padding: '8px',
//                           textAlign: 'right',
//                           borderBottom: '1px solid #eee',
//                         }}
//                       >
//                         {item.quantity}
//                       </td>
//                       <td
//                         style={{
//                           padding: '8px',
//                           textAlign: 'right',
//                           borderBottom: '1px solid #eee',
//                         }}
//                       >
//                         ₹{Number(item.price).toFixed(2)}
//                       </td>
//                       <td
//                         style={{
//                           padding: '8px',
//                           textAlign: 'right',
//                           borderBottom: '1px solid #eee',
//                         }}
//                       >
//                         ₹{(item.quantity * Number(item.price)).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <div style={{ marginTop: '20px', textAlign: 'right' }}>
//                 <p>
//                   <strong>Subtotal:</strong> ₹{Number(bill.total).toFixed(2)}
//                 </p>
//                 <p>
//                   <strong>Tax:</strong> ₹{Number(bill.tax || 0).toFixed(2)}
//                 </p>
//                 <p>
//                   <strong>Grand Total:</strong> ₹{Number(bill.grandTotal).toFixed(2)}
//                 </p>
//               </div>

//               <button
//                 onClick={() => downloadImage(bill.id)}
//                 style={{
//                   marginTop: '20px',
//                   padding: '10px 20px',
//                   backgroundColor: '#007BFF',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Download Invoice
//               </button>

//               <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '14px' }}>
//                 Thank you for your business!
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No bills found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllBills;

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBills } from "../../services/billAPI";
import { toPng } from "html-to-image";
import paytm from "../../assets/images/paytm1.png";
import phonepe from "../../assets/images/phonpe.png";
import gpay from "../../assets/images/gpay.png";

const AllBills = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const billRef = useRef(); // Ref for the bill container
  const [info, setInfo] = useState({ email: "" });
  const { email } = info;
  let count = 1;
  




  const allBill = useSelector((state) => state.bill.allBill);
  const loading = useSelector((state) => state.bill.loading);
  const profile = useSelector((state) => state.profile.profileData);

  const changeHandler = (e) => {
    setInfo((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getBills(info, navigate));
  };

  const downloadBill = (bill) => {
    if (billRef.current) {
      toPng(billRef.current, {
        backgroundColor: "white", // Ensures a white background
        cacheBust: true,
        style: {
          color: "black", // Ensures black text
        },
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `bill_${bill.customerName}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Failed to download image:", err);
        });
    }
  };

  return (
    <div>
      <div className="text-brown-900 text-2xl my-10">
        <p>
          Enter your <span>Email</span> to get all previous <span>Bills</span>
        </p>
        <form onSubmit={submitHandler}>
          <label>
            <p className="text-brown-800 text-sm">
              Email<span className="text-rose-600">*</span>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={changeHandler}
              className="border-[1px] border-black px-3 h-[30px] text-sm w-[250px] rounded-md"
            />
          </label>
          <button
            className=" w-70px] text-sm bg-purpule text-white h-[30px] px-2 ml-3 rounded-md"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Bills"}
          </button>
        </form>
      </div>

      <div>
        {allBill && allBill.length > 0  ? (
          allBill.map((bill, index) => (
            <div
              ref={billRef}
              key={index}
              style={{
                maxWidth: "1000px",
                marginTop: "30px",
                
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "white", // White background for export
                color: "black", // Black text for export
              }}
              className=" shadow-lg my-10 lg:text-[16px] text-xs lg:max-w-[1000px] max-w-screen-sm"
            >
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Invoice
              </h2>
              <div className=" flex flex-row justify-between">
                <div style={{ marginBottom: "20px" }}>
                  <strong>Customer Details:</strong>
                  <p>Name: {bill.customerName}</p>
                  <p>Address: {bill.customerAddress}</p>
                  <p>Date: {new Date(bill.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <strong>{profile.organizationName}:</strong>
                  <p>{profile.addressLine1}</p>
                  <p>{profile.addressLine2}</p>
                </div>
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #ccc" }}>
                    <th style={{ textAlign: "left", padding: "8px" }}>Item</th>
                    <th style={{ textAlign: "right", padding: "8px" }}>
                      Quantity
                    </th>
                    <th style={{ textAlign: "right", padding: "8px" }}>
                      Price
                    </th>
                    <th style={{ textAlign: "right", padding: "8px" }}>
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bill.items.map((item, idx) => (
                    <tr key={idx}>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {item.name}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          textAlign: "right",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {item.quantity}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          textAlign: "right",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        ₹{Number(item.price).toFixed(2)}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          textAlign: "right",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        ₹{(item.quantity * Number(item.price)).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div
                style={{ marginTop: "20px", textAlign: "right" }}
                className="flex flex-row justify-between"
              >
                <div className="flex flex-row  lg:gap-2  shadow-lg rounded-md px-4 py-2">
                  <div className=" flex flex-col lg:gap-2 gap-4">
                    <p className="text-start lg:text-sm text-xs text-blue">
                      Scan for payment
                    </p>
                    <img src={profile.about} width={120} className="lg:w-[120px] lg:h-[120px] w-[80px] h-[80px]" height={120} alt="" />
                  </div>
                  <div className="mt-5 flex flex-col gap-1">
                    <img src={paytm} width={40} className="lg:w-[40px] w-[30px]" alt="" />
                    <img src={phonepe} width={40} className="lg:w-[40px] w-[30px]" alt="" />
                    <img src={gpay} width={40} className="lg:w-[40px] w-[30px]" alt="" />
                  </div>
                </div>
                <div className=" mt-20">
                  <p>
                    <strong>Subtotal:</strong> ₹{Number(bill.total).toFixed(2)}
                  </p>
                  <p>
                    <strong>Tax:</strong> ₹{Number(bill.tax || 0).toFixed(2)}
                  </p>
                  <p>
                    <strong>Grand Total:</strong> ₹
                    {Number(bill.grandTotal).toFixed(2)}
                  </p>
                </div>
              </div>

              <p
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                  fontSize: "14px",
                }}
              >
                Thank you for your business!
              </p>
              <button
                className="w-[200px] h-[30px] lg:ml-0 ml-12 mt-3 text-white rounded-md bg-purpule"
                onClick={() => downloadBill(bill)}
              >
                Download as Image
              </button>
            </div>
          ))
        ) : (
          <p>No bills found</p>
        )}
      </div>
    </div>
  );
};

export default AllBills;
