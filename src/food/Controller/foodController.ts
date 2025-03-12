import { Request, Response } from "express";
import Foods from "../Models/FoodModels";
export const addFood = async (req: Request, res: Response) => {
  try {
    const connectFood = req.body;
    const addfood = await Foods.create(connectFood);

    res.status(200).json({ massage: "amjilttai ", addfood });
  } catch (error) {
    res.status(400).json({ massage: "hool nemhed aldaa garlaa" });
  }
};
export const getFood = async (req: Request, res: Response) => {
  try {
    const getfood = await Foods.find();
    res.status(200).json({ massage: "amjilttai ", getfood });
  } catch (error) {
    res.status(400).json({ massagee: "nemhed aldaa" });
  }
};
export const DeleteFood = async (req: Request, res: Response) => {
  try {
    const deleteID = req.params.id;
    const deletefood = await Foods.findByIdAndDelete(deleteID);
    res.status(200).json({ massage: "amjilttai ", deletefood });
  } catch (error) {
    res.status(400).json({ massagee: "nemhed aldaa" });
  }
};
export const putFood = async (req: Request, res: Response) => {
  try {
    const puID = req.params.id;
    const deletefood = await Foods.findByIdAndUpdate(puID, req.body, {
      new: true,
    });
    res.status(200).json({ massage: "amjilttai ", deletefood });
  } catch (error) {
    res.status(400).json({ massagee: "nemhed aldaa" });
  }
}; // 4
