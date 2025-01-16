const mongoose = require("mongoose");

const BillDetailsSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      required: true,
    },
    date: {
      type: Date, // Corrected from `date` to `Date`
      required: true,
    },
    items: [
      {
        name: { type: String, required: true }, // Added name for better item structure
        quantity: { type: Number, required: true }, // Added quantity
        price: { type: Number, required: true }, // Added price
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // Keeps track of createdAt and updatedAt
);

module.exports = mongoose.model("Bills", BillDetailsSchema);
