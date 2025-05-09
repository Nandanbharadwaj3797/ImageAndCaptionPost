import mongoose from "mongoose"
import bcrypt from "bcrypt";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:5
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        validate: {
            validator: function (emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: 'Invalid email format'
        }
    },
    // role: {
    //     type: String,
    //     default: "user",
    //     enum: ["user", "admin"]
    // },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
},{timestamps:true});

userSchema.pre('save',function modifypassword(next){
    // incoming user object 
    const user=this;// object with plain password
    const SALT=bcrypt.genSaltSync(9);

    // hash password
    const hasedpassword=bcrypt.hashSync(user.password,SALT);

    user.password=hasedpassword
    next();
})


const User=mongoose.model("User",userSchema);// user collection
export default User;