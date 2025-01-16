import React, { useState } from "react";
import BillInputForm from "../Dashboard/Bills/BillInputForm"
import BillTemplate from "../Dashboard/Bills/BillTemplate";


const GenerateBill = () => {
  const [billDatas, setBillDatas] = useState(()=>{
      const savedData = localStorage.getItem("billDatas");
      return savedData ? JSON.parse(savedData) : null;
    });
  // const [billData, setBillData] = useState(null);


  // const handleGenerateBill = (data) => {
  //   setBillData(data);
  // };
  const handleGenerateBill = (data) => {
    setBillDatas(data);
   localStorage.setItem("billDatas", JSON.stringify(data)); // Save data to localStorage
  };

  // Clear the bill data if needed (optional)
  const handleClearBill = () => {
    setBillDatas(null);
    localStorage.removeItem("billDatas"); // Remove from localStorage
  };

  console.log("hiii",billDatas)

  return (
    <div>
      <BillInputForm onGenerateBill={handleGenerateBill} />
      {/* {billDatas && <BillTemplate billData={billDatas} />} */}

    </div>
  );   
};

export default GenerateBill;

