import { Router } from "express";
import { Profile, Login, Register, Update } from "../controllers/user.controller";

const userRoute = Router();
userRoute
  .post("/register", Register)
  .post("/login", Login)
  .post("/profile", Profile)
  .post("/update", Update);
export { userRoute };
