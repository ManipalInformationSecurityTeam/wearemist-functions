import dbConnect from "../../../utils/dbConnect";
import News from "../../../models/News";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const userNews = await News.find({ author: req.query.author });
      res.status(200).json({ success: true, data: userNews });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
