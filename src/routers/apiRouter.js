// this api router will be  triggered when any request starting with /api/v1 comes
import express from "express"

import v1Router from './v1/v1Router.js';

const router =express.Router();

router.use('/v1',v1Router);// if in the remaining url i.e. after /api we have the url starting with /v1 then the request is forwarded to the v1 router



export default router;