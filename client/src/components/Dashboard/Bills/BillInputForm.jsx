
// import React, { useState } from "react";
// import { useDispatch, useSelector, } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createBill } from "../../../services/billAPI";
// import { setBillData } from "../../../slices/billSlice";

// const BillInputForm = ({ onGenerateBill }) => {
  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const billData = useSelector((state)=>state.bill.billData);
//   const [formData, setFormData] = useState({
//     customerName: "",
//     customerAddress: "",
//     date: new Date().toISOString().split("T")[0],
//     items: [],
//     tax: 0,
//   });

//   const [currentItem, setCurrentItem] = useState({
//     name: "",
//     quantity: "",
//     price: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleItemChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentItem({ ...currentItem, [name]: value });
//   };

//   const addItem = () => {
//     if (
//       currentItem.name &&
//       currentItem.quantity > 0 &&
//       currentItem.price > 0
//     ) {
//       setFormData({
//         ...formData,
//         items: [...formData.items, currentItem],
//       });
//       setCurrentItem({ name: "", quantity: "", price: "" });
//     }
//   };

//   const  handleSubmit =  (e) => {
//     e.preventDefault();
  
//     // Calculate total and grand total
//     const total = formData.items.reduce(
//       (sum, item) => sum + item.quantity * item.price,
//       0
//     );
//     const grandTotal = total + parseFloat(formData.tax || 0);
  
//     // Dispatch Redux action to set bill data
//     dispatch(setBillData({ ...formData, total, grandTotal }));
  
//     // Call API to create the bill
//     dispatch(createBill(formData, total, grandTotal));
  
//     // Optional: Log form data for debugging
//     console.log(formData);
//   };
  

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8 space-y-6"
//     >
//       <h2 className="text-2xl font-bold text-gray-700 text-center">
//         Bill Input Form
//       </h2>

//       {/* Customer Details */}
//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-600 font-medium mb-2">
//             Customer Name:
//           </label>
//           <input
//             type="text"
//             name="customerName"
//             value={formData.customerName}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-600 font-medium mb-2">
//             Customer Address:
//           </label>
//           <input
//             type="text"
//             name="customerAddress"
//             value={formData.customerAddress}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-600 font-medium mb-2">Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//       </div>

//       {/* Item Details */}
//       <div>
//         <h3 className="text-xl font-bold text-gray-700">Items</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
//           <div>
//             <label className="block text-gray-600 font-medium mb-2">
//               Item Name:
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={currentItem.name}
//               onChange={handleItemChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//               // required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 font-medium mb-2">
//               Quantity:
//             </label>
//             <input
//               type="number"
//               name="quantity"
//               value={currentItem.quantity}
//               onChange={handleItemChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//               // required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 font-medium mb-2">
//               Price:
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={currentItem.price}
//               onChange={handleItemChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//               // required
//             />
//           </div>
//         </div>
//         <button
//           type="button"
//           onClick={addItem}
//           className="mt-4 bg-blue-500 text-brown-900 px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Add Item
//         </button>
//         <ul className="mt-4 space-y-2">
//           {formData.items.map((item, index) => (
//             <li
//               key={index}
//               className="p-2 border border-gray-200 rounded-md bg-gray-50"
//             >
//               {item.name} - Quantity: {item.quantity}, Price: ₹{item.price}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Tax */}
//       <div>
//         <label className="block text-gray-600 font-medium mb-2">Tax:</label>
//         <input
//           type="number"
//           name="tax"
//           value={formData.tax}
//           onChange={handleInputChange}
//           className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//           required
//         />
//       </div>

//       {/* Submit */}
//       <div>
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-brown-900 px-4 py-2 rounded-md hover:bg-green-600"
//         >
//           Generate Bill
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BillInputForm;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBill } from "../../../services/billAPI";
import { setBillData } from "../../../slices/billSlice";

const BillInputForm = ({ onGenerateBill }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const billData = useSelector((state) => state.bill.billData);

  const [formData, setFormData] = useState({
    customerName: "",
    customerAddress: "",
    date: new Date().toISOString().split("T")[0],
    items: [],
    tax: 0,
  });

  const [currentItem, setCurrentItem] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const addItem = () => {
    if (currentItem.name && currentItem.quantity > 0 && currentItem.price > 0) {
      setFormData({
        ...formData,
        items: [...formData.items, currentItem],
      });
      setCurrentItem({ name: "", quantity: "", price: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate total and grand total
    const total = formData.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    const grandTotal = total + parseFloat(formData.tax || 0);

    // Dispatch Redux action to set bill data
    dispatch(setBillData({ ...formData, total, grandTotal }));
    onGenerateBill({ ...formData, total, grandTotal });

    // Call API to create the bill
    dispatch(createBill(formData, total, grandTotal,navigate));
    // onGenerateBill({ ...formData, total, grandTotal })

    // Clear the form fields after successful submission
    setFormData({
      customerName: "",
      customerAddress: "",
      date: new Date().toISOString().split("T")[0],
      items: [],
      tax: 0,
    });

    setCurrentItem({
      name: "",
      quantity: "",
      price: "",
    });

    // Optional: Log form data for debugging
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mt-10 mx-auto bg-white  border-[1px] border-black rounded-md p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-700 text-center">
        Bill Input Form
      </h2>

      {/* Customer Details */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Customer Name:
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Customer Address:
          </label>
          <input
            type="text"
            name="customerAddress"
            value={formData.customerAddress}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
      </div>

      {/* Item Details */}
      <div>
        <h3 className="text-xl font-bold text-gray-700">Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Item Name:
            </label>
            <input
              type="text"
              name="name"
              value={currentItem.name}
              onChange={handleItemChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              value={currentItem.quantity}
              onChange={handleItemChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Price:
            </label>
            <input
              type="number"
              name="price"
              value={currentItem.price}
              onChange={handleItemChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={addItem}
          className="mt-4 bg-blue-500 text-brown-900 px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Item
        </button>
        <ul className="mt-4 space-y-2">
          {formData.items.map((item, index) => (
            <li
              key={index}
              className="p-2 border border-gray-200 rounded-md bg-gray-50"
            >
              {item.name} - Quantity: {item.quantity}, Price: ₹{item.price}
            </li>
          ))}
        </ul>
      </div>

      {/* Tax */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Tax:</label>
        <input
          type="number"
          name="tax"
          value={formData.tax}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          required
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className='lg:w-[200px] w-[200px] lg:mx-[280px] mx-10 shadow-md h-[30px] text-white rounded-md bg-purpule'
        >
          Generate Bill
        </button>
      </div>
    </form>
  );
};

export default BillInputForm;
