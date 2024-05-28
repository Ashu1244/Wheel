import Booking from "../models/Booking.js"
export const createBooking=async(req,res)=>{
    const newBooking=new Booking(req.body)
    try{
      const savedBooking=await newBooking.save();
      res.status(200).json({success:true,message:'TourBooked',data:savedBooking})
    }
    catch(err){
        res.status(500).json({success:false,message:'Server Error'})
    }
}
export const getSingleBooking=async(req,res)=>{
    const id=req.params.id
    try{
      const book=await Booking.findById(id);
      res.status(200).json({success:true,message:'Successfull',data:book})
    }
    catch(err){
        res.status(500).json({success:false,message:'Server Error'})
    }
}
export const getAllBooking=async(req,res)=>{
    try{
      const book=await Booking.find();
      res.status(200).json({success:true,message:'Successfull',data:book})
    }
    catch(err){
        res.status(500).json({success:false,message:'Server Error'})
    }
}