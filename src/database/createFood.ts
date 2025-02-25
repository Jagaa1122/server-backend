// import { MongoClient } from "mongodb";
// import { configDotenv } from "dotenv";

// export async function getMovies() {
//   configDotenv();
//   const uri = process.env.MONGODB_URL || "";
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const database = client.db("food-delivery");

//     const collection = database.collection("food");

//     // const findQuery = {
//     //   $and: [{ "imdb.rating": { $gt: imdb } }, { year: { $gt: year } }],
//     // };
//     const foods = await collection.insertMany([
//       {
//         name: "Grilled chicken",
//         price: "$12.99",
//         ingridients: "creamy syrup",
//       },
//       {
//         name: "Finger food",
//         price: "$10.99",
//         ingridients: "fluffy pancaked stracked with friuts",
//       },
//       {
//         name: "Cranberry Brie Bites",
//         price: "$13.99",
//         ingridients: "powdered sugar with friuts",
//       },
//       {
//         name: "Brie Crostini Appetizer",
//         price: "$11.99",
//         ingridients: "fluffy pancaked stracked with friuts",
//       },
//     ]);
//     return foods;
//   } catch (e) {
//     console.log(e);
//   } finally {
//     await client.close();
//   }
// }
