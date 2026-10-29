const jwt =require("jsonwebtoken")

const protect=(req,res,next)=>{
    const authHeadr=req.headers.authorization;

    if(!authHeadr || !authHeadr.startsWith("Bearer")){
        return res.status(401).json({
            message:"No Token , Try Again"
        })
    }

    const token=authHeadr.split(" ")[1] // bearer hkjhkjhfjlfkjfljjf--> ["bearer","hfkhgfhuhiufh"]

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
}

const authorize=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                message:"Acccess Denied: You are not Allowed"
            })
        }
        next()
    }
}

module.exports={protect,authorize}