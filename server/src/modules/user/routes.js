import { Router } from "express";
import registerController from "./controller/register.js";

const router = Router();

router.post("/signup", registerController);

export default router;
