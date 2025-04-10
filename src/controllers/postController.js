import {createPostService, deletePostByIdService, getallpostsService, updatePostService} from "../services/postService.js"
export async function createPost(req,res){
    console.log(req.file);

    // call the service layer function
    if(!req.file|| !req.file.location){
        return res.status(400).json({
            success:false,
            message:"Image is required"
        });
    }

    const post=await createPostService({
        caption:req.body.caption,
        image:req.file.location
    });
    return res.status(201).json({
        success:true,
        message:'post created successfully',
        data:post
    });
}

// /api/v1/posts?limit=10&offset=0
export async function getallposts(req,res){
    try {
        const limit=req.query.limit||10;
        const offset=req.query.offset||0;
        
        const paginatedposts=await getallpostsService(offset,limit);

        return res.status(200).json({
            success:true,
            message:"all posts fetched successfully",
            data:paginatedposts
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server Error"
        });
    }
}

export async function deletepost(req,res){
    try {
        const postId=req.params.id;
    const response=await deletePostByIdService(postId);
    if(!response){
        return res.status(404).json({
            success:true,
            message:"Post not Found"
        });
    }
    return res.status(200).json({
        success:true,
        data:response
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server Error"
        });
    }
}

export async function updatepost(req,res){
    try {

        console.log("req file",req.file);
       const updateObject=req.body;
       if(req.file){
        updateObject.image=req.file.location;
       }
       const response=await updatePostService(req.params.id,updateObject);
       return res.status(200).json({
        success:true,
        message:'post updated successfully',
        data:response
       });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server Error"
        });
    }
}