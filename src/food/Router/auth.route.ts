import { Router } from "express";
import { signUp } from "../Controller/auth/signUp.controller";
import { signIn } from "../Controller/auth/signIn.controller";

const userRoute = Router();

userRoute.post("/signup", signUp);
userRoute.post("/signin", signIn);
export default userRoute;
