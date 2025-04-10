import { checkIfUserExist } from "../services/userService.js";
import { verifyjwtToken } from "../utils/jwt.js";

export const  isAuthenticated = async (req, res, next) => {
    // check if jwt is passed in the header
    const token = req.headers["x-access-token"]; // or req.headers["authorization"];

    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Token is required"
        });
    }
    // verify the token
    try{
        const response = verifyjwtToken(token);
        const doesUserexist=await checkIfUserExist(response.email);
        if(!doesUserexist){
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }
        req.user = response; // attach the user to the request object
        next(); // call the next middleware
    }catch(error){
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
}