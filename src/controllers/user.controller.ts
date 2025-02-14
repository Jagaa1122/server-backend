import { RequestHandler } from "express";
import { users } from "../database/user.db";

export const Register: RequestHandler = (req, res) => {
  const { name, email, password } = req.body;

  const findUser = users.find((user) => user.email === email);
  if (findUser) {
    res.send("Email already exist");
    return;
  }

  const lastUser = users[users.length - 1];
  const newUserId = lastUser?._id ? Number(lastUser._id) + 1 : 1;

  const newUser = { _id: newUserId.toString(), name, email, password };

  users.push(newUser);
  res.status(201).send("User registered successfully");
};

export const Login: RequestHandler = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    res.send("Invalid email");
    return;
  }

  if (user.password !== password) {
    res.send("Invalvid password");
    return;
  }
  res.send(`Login successful ${user._id}`);
};

export const Profile: RequestHandler = (req, res) => {
  const { _id } = req.body;
  const idFinder = users.find((user) => user._id === _id);

  if (!idFinder) {
    res.send("No profile found");
    return;
  }

  res.status(200).json({ idFinder, massage: "Success" });
};
