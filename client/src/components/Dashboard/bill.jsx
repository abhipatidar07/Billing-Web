import React from "react";

const BillTemplate = ({ billData }) => {
  // Default hardcoded data for preview
  const defaultData = {
    customerName: "John Doe",
    customerAddress: "123 Mountain View, Himalayas",
    date: new Date().toISOString(),
    items: [
      { name: "Notebook", quantity: 2, price: 50 },
      { name: "Pen", quantity: 5, price: 10 },
      { name: "Eraser", quantity: 3, price: 5 },
    ],
    total: 2 * 50 + 5 * 10 + 3 * 5, // 145
    tax: 10, // Example tax
    grandTotal: 145 + 10, // 155
  };

  // Use the provided billData or fallback to defaultData
  const {
    customerName,
    customerAddress,
    date,
    items,
    total,
    tax,
    grandTotal,
  } = billData || defaultData;

  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Invoice</h2>

      {/* Customer Details */}
      <div className="mb-6">
        <strong className="text-lg text-gray-800">Customer Details:</strong>
        <p className="text-gray-700">Name: {customerName}</p>
        <p className="text-gray-700">Address: {customerAddress}</p>
        <p className="text-gray-700">Date: {new Date(date).toLocaleDateString()}</p>
      </div>

      {/* Item Table */}
      <table className="w-full table-auto mb-6">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-2 px-4 text-gray-700">Item</th>
            <th className="text-right py-2 px-4 text-gray-700">Quantity</th>
            <th className="text-right py-2 px-4 text-gray-700">Price</th>
            <th className="text-right py-2 px-4 text-gray-700">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-2 px-4 text-gray-700">{item.name}</td>
              <td className="py-2 px-4 text-right text-gray-700">{item.quantity}</td>
              <td className="py-2 px-4 text-right text-gray-700">₹{item.price.toFixed(2)}</td>
              <td className="py-2 px-4 text-right text-gray-700">
                ₹{(item.quantity * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Section */}
      <div className="text-right mb-6">
        <p className="text-gray-700">
          <strong>Subtotal:</strong> ₹{total.toFixed(2)}
        </p>
        <p className="text-gray-700">
          <strong>Tax (₹):</strong> ₹{tax.toFixed(2)}
        </p>
        <p className="text-xl font-semibold text-gray-800">
          <strong>Grand Total:</strong> ₹{grandTotal.toFixed(2)}
        </p>
      </div>

      {/* Thank You Note */}
      <p className="text-center text-gray-600 text-sm mt-6">
        Thank you for your business!
      </p>
    </div>
  );
};

export default BillTemplate;
