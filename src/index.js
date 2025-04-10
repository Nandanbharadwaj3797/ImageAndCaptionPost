import express from'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js';
import multer from"multer";
import { isAuthenticated } from './middlewares/authmiddlewares.js';

const PORT=3000;// [port number]

const app=express();// create express app server instance

const upload=multer();

app.use(express.json());// middleware to parse json data
app.use(express.text());
app.use(express.urlencoded());

app.get('/ping',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    console.log(req.user);
    return res.json({message:'pong'});
});

app.use('/api',apiRouter); // if the url start with /api then the request is forwarded to the apiRouter


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
});


/*
import postRouter from './routers/post.js';
import userRouter from './routers/user.js';


app.use('/posts',postRouter); // if the URL start with / posts, then use the postrouter to handle the request

app.use('/users',userRouter); // if the any request start with /users then use the userRouter to handle the request 



*/

// // query params
// app.get('/ping',(req,res)=>{
//     console.log(req.query);
//     return res.json({message:'pong'});
// });
//--------------------
// in router folders
//app.post('/posts',s3uploader.single('image'),createPost);
//-----------------------------
// req body
// app.get('/ping',(req,res)=>{
//     console.log(req.query);
//     console.log(req.body);
//     return res.json({message:'pong'});
// });



//middleware

//app.post('/posts',m1,m2,m3,createPost);
//app.post('/posts',[m1,m2,m3],createPost);


/*
function m1(req,res,next){
    console.log('m1');
    next();
}

function m2(req,res,next){
    console.log('m2');
    next();
}

function m3(req,res,next){
    console.log('m3');
    next();
}
*/



/*

// app.get('/ping',(req,res)=>{
//     return res.json({message:'pong'});
// });

// url params
// app.get('/ping/:name',(req,res)=>{
//     const name=req.params.name // req.params->{name:'value'}
//     return res.json({message:'pong'+' '+name});
// });

// query params
// app.get('/ping',(req,res)=>{
//     console.log(req.query);
//     return res.json({message:'pong'});
// });

*/







/*import express from"express";

const PORT=3000;


const app=express();// create express app server instance

app.get('/',(req,res)=>{
    return res.send("home");
});

app.get('/hello',(req,res)=>{
    return res.send("Hello world");
});

app.get('/ping',(req,res)=>{
    return res.json({message:'pong'});
});

app.post('/hello',(req,res)=>{
    return res.json({message:'hello world'});
});

app.put('/hello',(req,res)=>{
    return res.json({message:'hello world'});
});

app.delete('/hello',(req,res)=>{
    return res.json({message:'hello world'});
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
*/
/*
post request access
-------------------
async function fun(){
    const response =await fetch("http://localhost:3000/hello",{method:"POST"});
    const data=await response.json();
    console.log(data);
}

fun();

*/