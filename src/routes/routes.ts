import express,{Request,Response} from "express"
import { User } from "../models/usermodel";

const router =  express.Router()
// const app= express

// router.get("/",(req: Request, res: Response)=> {
//     res.json({
//         message: "api created",
//     });
// });

router.post("/add",async(req: Request, res: Response)=>{
   try{
    const {name,post}=req.body;
    const item=User.set({name,post});
    await item.save();
    return res.status(200).json({
    data:item,
    });
}catch(error){
        return res.status(500).json({
            error:error,
        });
};
});

router.get("/",async(req: Request,res: Response)=>{
    try{
        const item=await User.find({});
    return res.status(200).json({
        data:item,
    });
}catch(error){
    return res.status(500).json({
        error:error,
    });
}
});

router.get("/:_id",async(req: Request,res: Response)=>{
    try{
        const item=await User.findById(req.body.name);
    return res.status(200).json({
        data:item,
    });
}catch(error){
    return res.status(500).json({
        error:error,
    });
}
});

router.put("/update",async(req: Request,res: Response)=>{
    try{
        const filter = {
           name: req.body.name,
        };
        const update = {
            post: req.body.post,
         };
         const item = await User.updateOne(filter, update,{
             new: true,
         });
         return res.status(200).json({
             data:item,
         });
        }catch(error){
            return res.status(500).json({
                error:error,
            });
        }
    });


    router.delete("/delete",async(req: Request,res: Response)=>{
        try{
            const filter = {
               name: req.body.name,
            };
            
             const item = await User.deleteOne(filter)
                 .then((data)=>
                 res.json({
                     data: data,
                 })
                 )
                 .catch((e)=>{
                     console.log(e);
             });
            }catch(error){
                return res.status(500).json({
                    error:error,
                });
            }
        });
export {router};