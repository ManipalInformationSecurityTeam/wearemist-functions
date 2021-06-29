import dbConnect from "../../../utils/dbConnect";
import News from "../../../models/News";

export default async function handler(req, res) {
  await dbConnect();

  const { method, query } = req;
  if (method === "GET") {
    try {
      if (
        !isNaN(query.page) &&
        !isNaN(parseFloat(query.page)) &&
        typeof query.page == "string"
      ) {
        const categories = await News.find().distinct("filtertag");
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
          const categoryNews = await News.find({ filtertag: matchingCategory })
            .sort("-date")
            .limit(12)
            .skip(12 * parseInt(query.page));
          res.status(200).json({
            success: true,
            category: matchingCategory,
            data: categoryNews,
          });
        } else {
          res.status(500).json({ success: false });
        }
      } else {
        res.status(500).json({ success: false });
      }
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
