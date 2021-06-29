import dbConnect from "../../../utils/dbConnect";
import Newsletter from "../../../models/Newsletter";

export default async function handler(req, res) {
  await dbConnect();

  const { method, body, headers } = req;
  if (method === "POST" && headers.client_token === process.env.CLIENT_TOKEN) {
    try {
      const available = await Newsletter.findOne({ email: body.email });
      if (available) {
        res.status(409).json({ success: false, msg: "Email already exists" });
      } else {
        const newData = { email: body.email };
        const newSubscriber = new Newsletter(newData);
        newSubscriber.save();
        res.status(200).json({ success: true, msg: "Email added" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
