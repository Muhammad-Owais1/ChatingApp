import { Router } from "express";
import registerController from "./controller/register.js";
import loginController from "./controller/login.js";
import getUserController from "./controller/getUser.js";
import authentication from "../../helper/tokenHandler.js";

const router = Router();

router.post("/signup", registerController);
router.post("/signin", loginController);
router.get("/getinfo", authentication, getUserController);

export default router;
