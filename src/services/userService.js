import { createUser, findUserByEmail } from "../repositories/userRepositories.js";
import bcrypt from "bcrypt";
import { generatejwtToken } from "../utils/jwt.js";
export const signupuserservice=async (user)=>{
    try{
        const newUser=await createUser(user);

        return newUser;
    }catch(error) {
        if(error.name === "MongoServerError" && error.code === 11000) {
            throw {
                status: 400,
                message: "User with the same email or username already exists"
            }
        }
        else{
            throw error;
        }
    }
}

export const signinuserservice=async (userDetails)=>{
    try {
        // 1. check if there is a valid registered user with the email
        const user= await findUserByEmail(userDetails.email);
        if(!user) {
            throw {
                status: 404,
                message: "user Not found"
            }
        }
        // 2. check if the password is correct
        const ispasswordValid=bcrypt.compareSync(userDetails.password, user.password); 
        if(!ispasswordValid) {
            throw {
                status: 401,
                message: "Invalid Password"
            }
        }
        // 3. if everything is ok, return the user
        const token=generatejwtToken({email:user.email,_id:user._id,username:user.username});
        return token;
    } catch (error) {
        throw error;
    }

}

export const checkIfUserExist=async(email)=>{
    try {
        const user = await findUserByEmail(email);
        return user;
    } catch (error) {
        throw error;
    }
}