import {z} from "zod";
export const zodsiginSchema=z.object({
    email:z.string().email({message:"Invalid email"}),
    password:z.string().min(5,{message:"Password must be at least 5 characters long"}),
    
});