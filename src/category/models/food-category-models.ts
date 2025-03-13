import mongoose, { Schema, Document } from "mongoose"; // Added `Document` for TypeScript type safety

// Extend Document to ensure MongoDB document properties are included
interface FoodCategorySchemaType extends Document {
  categoryName: string;
}

// Define Schema
const FoodCategorySchema: Schema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Explicitly set the collection name as "foodcategories"
export default mongoose.model<FoodCategorySchemaType>(
  "FoodCategory",
  FoodCategorySchema,
  "foodcategories" // Added explicit collection name
);
