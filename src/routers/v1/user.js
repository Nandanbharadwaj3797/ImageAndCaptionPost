// after /users the remaining part of the url is handle here
import express from "express";
import { getprofile, signin, signup } from "../../controllers/userController.js";
import { zodSignupSchema } from "../../validators/zodSignupschema.js";
import { validate } from "../../validators/zodValidators.js";
import { zodsiginSchema } from "../../validators/zodSiginschema.js";
const router =express.Router();

router.get('/profile',getprofile);
router.post('/signup',validate(zodSignupSchema),signup);
router.post('/signin',validate(zodsiginSchema),signin);

export default router;