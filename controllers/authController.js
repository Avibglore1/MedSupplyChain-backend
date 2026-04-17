import jwt from "jsonwebtoken";

export const login = async(req,res) =>{
    const {email,role} = req.body;

    const user = {
        id: "123",
        email,
        role
    };
    
    const token = jwt.sign(user, process.env.JWT_SECRET,{
        expiresIn: "1d"
    })

    res.json({token,user})
}