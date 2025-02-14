import { Router } from "express";
import { Profile, Login, Register } from "../controllers/user.controller";

const userRoute = Router();
userRoute
  .post("/register", Register)
  .post("/login", Login)
  .post("/Profile", Profile);

export { userRoute };
