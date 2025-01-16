import React, { useEffect, useState } from 'react'
import BillTemplate from './Bills/BillTemplate';

const DisplayBill = () => {
  const [bill,setBill] = useState(null);

  //retriev bill data from local storage
  useEffect(()=>{
    const data = localStorage.getItem("billDatas");
    if (data) {
        setBill(JSON.parse(data));
      }
  },[])

  if(!bill){
    return <p className='text-black text-7xl'>No data is available</p>
  }
  return <BillTemplate  billData={bill}  />
}

export default DisplayBill
