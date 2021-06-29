import dbConnect from "../../../utils/dbConnect";
import Alumni from "../../../models/Alumni";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const alumniyears = await Alumni.find().distinct("year");
      res.status(200).json({ success: true, data: alumniyears });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
