import { User } from "../models/user/user.model.js";

export const  getUserDetails = async (req, res) =>{
    try{

        const userId = req.user?.id;
        if(!userId)
            {
                return res.status(401).json({message: "UserId not present "})
            }
        const ans = await User.findById(userId);
        if(!ans)
        {
             return res.status(401).json({message: "User not found"});
        }
        return res.status(200).json(ans);
    }
    catch(err)
    {
        return res.status(404).json({message: "User not found"})
    }

}