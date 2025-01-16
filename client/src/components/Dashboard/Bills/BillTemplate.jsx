// import React from "react";

// const BillTemplate = ({ billData }) => {
//   const {
//     customerName,
//     customerAddress,
//     date,
//     items,
//     total,
//     tax,
//     grandTotal,
//   } = billData;

//   return (
//     <div
//       style={{
//         maxWidth: "800px",
//         margin: "auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Invoice</h2>
//       <div style={{ marginBottom: "20px" }}>
//         <strong>Customer Details:</strong>
//         <p>Name: {customerName}</p>
//         <p>Address: {customerAddress}</p>
//         <p>Date: {new Date(date).toLocaleDateString()}</p>
//       </div>

//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ borderBottom: "2px solid #ccc" }}>
//             <th style={{ textAlign: "left", padding: "8px" }}>Item</th>
//             <th style={{ textAlign: "right", padding: "8px" }}>Quantity</th>
//             <th style={{ textAlign: "right", padding: "8px" }}>Price</th>
//             <th style={{ textAlign: "right", padding: "8px" }}>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
//                 {item.name}
//               </td>
//               <td
//                 style={{
//                   padding: "8px",
//                   textAlign: "right",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 {item.quantity}
//               </td>
//               <td
//                 style={{
//                   padding: "8px",
//                   textAlign: "right",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 ₹{item.price.toFixed(2)}
//               </td>
//               <td
//                 style={{
//                   padding: "8px",
//                   textAlign: "right",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 ₹{(item.quantity * item.price).toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div style={{ marginTop: "20px", textAlign: "right" }}>
//         <p>
//           <strong>Subtotal:</strong> ₹{total.toFixed(2)}
//         </p>
//         <p>
//           <strong>Tax (₹):</strong> ₹{tax.toFixed(2)}
//         </p>
//         <p>
//           <strong>Grand Total:</strong> ₹{grandTotal.toFixed(2)}
//         </p>
//       </div>

//       <p style={{ textAlign: "center", marginTop: "30px", fontSize: "14px" }}>
//         Thank you for your business!
//       </p>
//     </div>
//   );
// };

// export default BillTemplate;

// import React from "react";

// const BillTemplate = ({ billData }) => {
//   const {
//     customerName,
//     customerAddress,
//     date,
//     items,
//     total,
//     tax,
//     grandTotal,
//   } = billData;

//   return (
//     <div
//       style={{
//         maxWidth: "800px",
//         margin: "auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Invoice</h2>
//       <div style={{ marginBottom: "20px" }}>
//         <strong>Customer Details:</strong>
//         <p>Name: {customerName}</p>
//         <p>Address: {customerAddress}</p>
//         <p>Date: {new Date(date).toLocaleDateString()}</p>
//       </div>

//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ borderBottom: "2px solid #ccc" }}>
//             <th style={{ textAlign: "left", padding: "8px" }}>Item</th>
//             <th style={{ textAlign: "right", padding: "8px" }}>Quantity</th>
//             <th style={{ textAlign: "right", padding: "8px" }}>Price</th>
//             <th style={{ textAlign: "right", padding: "8px" }}>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
//                 {item.name}
//               </td>
//               <td
//                 style={{
//                   padding: "8px",
//                   textAlign: "right",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 {item.quantity}
//               </td>
//               <td
//                 style={{
//                   padding: "8px",
//                   textAlign: "right",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 ₹{Number(item.price).toFixed(2)}
//               </td>
//               <td
//                 style={{
//                   padding: "8px",
//                   textAlign: "right",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 ₹{(item.quantity * Number(item.price)).toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div style={{ marginTop: "20px", textAlign: "right" }}>
//         <p>
//           <strong>Subtotal:</strong> ₹{total.toFixed(2)}
//         </p>
//         <p>
//           <strong>Tax (₹):</strong> ₹{tax.toFixed(2)}
//         </p>
//         <p>
//           <strong>Grand Total:</strong> ₹{grandTotal.toFixed(2)}
//         </p>
//       </div>

//       <p style={{ textAlign: "center", marginTop: "30px", fontSize: "14px" }}>
//         Thank you for your business!
//       </p>
//     </div>
//   );
// };

// export default BillTemplate;

import React from "react";
import { useSelector } from "react-redux";
import paytm from "../../../assets/images/paytm1.png"
import phonepe from "../../../assets/images/phonpe.png"
import gpay from "../../../assets/images/gpay.png"

const BillTemplate = ({ billData }) => {
  const profile = useSelector((state)=>state.profile.profileData);
  localStorage.setItem("billData", JSON.stringify(billData));
  const { customerName, customerAddress, date, items, total, tax, grandTotal } =
    billData;

  return (
    <div
      style={{
        maxWidth: "800px",
        // margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
      }}
      className=" shadow-lg my-10 mx-auto"
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Invoice</h2>
      <div className="flex flex-row justify-between">
        <div style={{ marginBottom: "20px" }}>
          <strong>Customer Details:</strong>
          <p>Name: {customerName}</p>
          <p>Address: {customerAddress}</p>
          <p>Date: {new Date(date).toLocaleDateString()}</p>
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
            <th style={{ textAlign: "right", padding: "8px" }}>Quantity</th>
            <th style={{ textAlign: "right", padding: "8px" }}>Price</th>
            <th style={{ textAlign: "right", padding: "8px" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* {items.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
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
          ))} */}
          {(Array.isArray(items) ? items : []).map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
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

      <div style={{ marginTop: "20px", textAlign: "right" }} className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 shadow-lg rounded-md px-4 py-2">
          <div className=" flex flex-col gap-2">
          <p className="text-start text-sm text-blue">Scan for payment</p>
          <img src={profile.about} width={120} height={120} alt="" />
          </div>
          <div className="mt-5 flex flex-col gap-1">
            <img src={paytm} width={40} alt="" />
            <img src={phonepe} width={40} alt="" />
            <img src={gpay} width={40} alt="" />
          </div>
          </div>
        <div className="mt-20">
        <p>
          <strong>Subtotal:</strong> ₹{Number(total).toFixed(2)}
        </p>
        <p>
          <strong>Tax:</strong> ₹{Number(tax || 0).toFixed(2)}
        </p>
        <p>
          <strong>Grand Total:</strong> ₹{Number(grandTotal).toFixed(2)}
        </p>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "30px", fontSize: "14px" }}>
        Thank you for your business!
      </p>
    </div>
  );
};

export default BillTemplate;
