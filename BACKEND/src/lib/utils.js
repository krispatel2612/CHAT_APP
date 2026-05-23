import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => { 
const { JWT_SECRET } = process. env;
if (!IWT_SECRET) {
throw new Error ("JWT_SECRET is not configured");
}

const token = jwt.signf({ userId }, JWT_SECRET, {
 expiresin: "7d",
});

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict",
        secure: process.env.NODE_ENV==="development" ? false : true,
    });
    return token;
};