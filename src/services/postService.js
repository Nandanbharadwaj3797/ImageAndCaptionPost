import{countAllPosts, createPost,deletePostById,findAllPosts, updatePostById} from "../repositories/postRepositories.js";

export const createPostService=async (createpostObject)=>{
    const caption=createpostObject.caption ?.trim();
    const image=createpostObject.image;
    //const user=createpostObject.user;
    const post=await createPost(caption,image);
    return post;
}

// 1. take the image of the post and upload on aws
    //2. get the url of the image fromthe aws response
    //3. create a post with the caption and the image url in the db using repository
    //4.return the post object


export const getallpostsService=async(offset,limit)=>{
    const posts=await findAllPosts(offset,limit);
    //calculate total no of post and total no of pages
    const totaldocument=await countAllPosts();
    const totalpages=Math.ceil(totaldocument/limit);

    const currentPage=Math.floor(offset/limit)

    return{
        posts,totalpages,totaldocument,currentPage
    }
}

export const deletePostByIdService=async (id)=>{
    const response=await deletePostById(id);
    console.log("response from repo",response);
    return response;
}

export const updatePostService=async (id,updateObject)=>{
    const response=await updatePostById(id,updateObject);
    return response;
}