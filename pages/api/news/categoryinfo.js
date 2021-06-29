import dbConnect from "../../../utils/dbConnect";
import News from "../../../models/News";

export default async function handler(req, res) {
  await dbConnect();

  const { method, query } = req;
  if (method === "GET") {
    try {
      const categories = await News.find({}).distinct("filtertag");
      let i = 0;
      let matchingCategory;
      let match = false;
      while (!match) {
        if (
          query.category === categories[i].split(" ").join("").toLowerCase()
        ) {
          match = true;
          matchingCategory = categories[i];
        }
        i++;
      }
      if (match) {
        const countQuery = await News.countDocuments({
          filtertag: matchingCategory,
        });
        res.status(200).json({
          success: true,
          category: matchingCategory,
          count: countQuery,
        });
      } else {
        res.status(500).json({ success: false });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
