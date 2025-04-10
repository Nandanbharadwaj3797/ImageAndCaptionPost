// here all post related routes are present
// we look at the remaning url part after
import express from 'express';

import { s3uploader } from "../../config/multerConfig.js";
import { createPost, deletepost, getallposts, updatepost } from "../../controllers/postController.js";
import { validate } from '../../validators/zodValidators.js';
import { zodPostSchema } from '../../validators/zodPostschema.js';

const router=express.Router();// router object to modularized the routes

router.post('/',s3uploader.single('image'),validate(zodPostSchema),createPost);

router.get('/',getallposts);

router.delete('/:id',deletepost);

router.put('/:id',s3uploader.single('image'),updatepost);

export default router;