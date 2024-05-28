import Tour from "../models/Tour.js";
export const createTour=async (req,res)=>{
    const newTour=new Tour(req.body);
    try{
      const savedTour=await newTour.save()
      res.status(200).json({success:true,message:'Successfully created',data:savedTour})
    }
    catch(err){
        res.status(500).json({success:false,message:'Failed to create'})
    }
};

export const updateTour=async(req,res)=>{
    const id=req.params.id
    try{
        const updatedTour=await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({success:true,message:'Successfully updated',data:updatedTour,})
    }
    catch(err){
        res.status(500).json({success:false,message:'Failed to update'})
    }
}
export const deleteTour=async(req,res)=>{
    const id=req.params.id
    try{
        await Tour.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'Successfully deleted',})
    }
    catch(err){
        res.status(500).json({success:false,message:'Failed to delete'})
    }
}
export const getSingleTour=async(req,res)=>{
    const id=req.params.id
    try{
        const tour=await Tour.findById(id).populate('reviews');
        res.status(200).json({success:true,message:'Successfully Found',data:tour})
    }
    catch(err){
        res.status(500).json({success:false,message:'Not Found'})
    }
}
export const getAllTour=async(req,res)=>{
    const page=parseInt(req.query.page)
    console.log(page);
    try{
        const tour=await Tour.find({}).populate('reviews').skip(page*8).limit(8);
        res.status(200).json({success:true,message:'Successfully Found All Tours',data:tour})
    }
    catch(err){
        res.status(500).json({success:false,message:'Not Found'})
    }
}
export const getTourBySearch=async(req,res)=>{
    const city=new RegExp(req.query.city,'i');
    const distance=parseInt(req.query.distance);
    const maxGroupSize=parseInt(req.query.maxGroupSize);

    try{
        const tour=await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}});
        res.status(200).json({success:true,message:'Successfully Found',data:tour})
    }
    catch(err){
        res.status(500).json({success:false,message:'Not Found'})
    }
}
export const getFeaturedTour=async(req,res)=>{
    try{
        const tour=await Tour.find({featured:true}).populate('reviews').limit(8);
        res.status(200).json({success:true,message:'Successfully Found Featured Tours',data:tour})
    }
    catch(err){
        res.status(500).json({success:false,message:'Not Found'})
    }
}
export const getTourCount=async(req,res)=>{
    try{
        const tour=await Tour.estimatedDocumentCount();
        res.status(200).json({success:true,data:tour})
    }
    catch(err){
        res.status(500).json({success:false,message:'Not Found'})
    }
}