import dbConnect from "../../../utils/dbConnect";
import News from "../../../models/News";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const article = await News.find({ _id: req.query.id });
      res.status(200).json({ success: true, data: article });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
