import { Request, Response } from "express";
import userModel from "../../Models/user.model";
import { compareSync } from "bcryptjs";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "Emailaa bicheeshdee" });
      return;
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "Burtgelgui hereglegch bn" });
      return;
    }

    const isCorrect = compareSync(password, user.password);

    if (!isCorrect) {
      res.status(401).json({ message: "password buruu bn" });
      return;
    }

    res.status(200).json({ message: "Amjilttai nevterlee", data: user });
  } catch (error) {
    res.status(500).json({ message: "Aldaa garlaa", error });
  }
};
