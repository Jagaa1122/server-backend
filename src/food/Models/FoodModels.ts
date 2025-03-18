import mongoose, { Schema } from "mongoose";

interface IFood {
  //INTERFACE TYPE
  categoryName: string;
  price: number;
  image: string;
  ingredients: number;
  category: Schema.Types.ObjectId; //TYPE ZAANA
}
const Foods: Schema = new Schema(
  {
    FoodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: Number, required: true },
    category: { type: Object, rel: "FoodCategory", required: true },
  },
  { timestamps: true }
);
export default mongoose.model<IFood>("food", Foods); //<3"food" mongodb deer uussen ner
