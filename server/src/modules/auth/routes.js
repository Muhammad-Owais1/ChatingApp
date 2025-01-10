import { Router } from "express";
import registerController from "./controller/register.js";
import loginController from "./controller/login.js";

const router = Router();

router.post("/signup", registerController);
router.post("/signin", loginController);

export default router;
