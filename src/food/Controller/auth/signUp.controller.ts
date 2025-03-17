import { Request, Response } from "express";
import userModel from "../../Models/user.model";
import { hashSync } from "bcryptjs";

export const signUp = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    res.status(401).json({ message: "Emailaa bicheeshdee" });
    return;
  }
  console.log("raw password", password);
  const hashedPassword = hashSync(password, 10);
  console.log("hashedPassword", hashedPassword);
  res.status(200).json({ message: "done" });
};
