const Bills = require("../models/billDetails");
// const { findOne } = require("../models/Profile");
const user = require("../models/user");

exports.billDetails = async (req, res) => {
  try {
    const { customerName, customerAddress, date, items, total, tax, grandTotal,email } =
    req.body;

    //validation
    if(!customerName || !customerAddress || !date  || !total || !tax || !grandTotal ||!email  ){
        return res.status(401).json({
            success:false,
            message:"All field are mendetory"
        })
    }
    
    
    //create entry in database
    const billDetail = await Bills.create({
        customerName, 
        customerAddress, 
        date, 
        items, 
        total, 
        tax, 
        grandTotal 
    }) 
    

    //check for existing user for perticular id
    const User = await user.findOne({email});
    if (!User) {
        return res.status(404).json({
          success: false,
          message: "User not exist",
        });
    }

    User.bills.push(billDetail._id);
    await User.save();
    
     // Respond with success
     return res.status(201).json({
        success: true,
        message: "Bill created and linked to user successfully.",
        billDetail,
      });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
    
};


exports.getAllBills = async (req,res) => {
  try {
     
  //get the mail id
  const {email} = req.body;

  //validate the email
  if(!email){
    return res.status(400).json({
      success:false,
      message:"Email is required to fetch the bills"
    })
  }

  //get the user based on the email
  const userBills = await user.findOne({email}).populate("bills");
  if(!userBills){
    return res.status(400).json({
      success:false,
      message:"User not found with corresponding mail"
    })
  }

  //return the response
  res.status(200).json({
    success:true,
    message:"Bills recieved successfully",
    bills:userBills.bills,
  })
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }

}