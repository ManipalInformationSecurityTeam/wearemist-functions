import dbConnect from "../../../utils/dbConnect";
import Announcement from "../../../models/Announcement";

export default async function handler(req, res) {
  await dbConnect();

  const { method, headers } = req;
  if ( method === "GET" ) {
    try {
      const announcements = await Announcement.find({}).sort("-date");
      if(!announcements) return res.status(409).send({ success: false, msg: 'No announcements found' });  
      res.status(200).json({ success: true, data: announcements });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else if( method === "POST" ) {
    try {
      if (headers.auth_api_token === process.env.APP_API) {
        const {
          date,
          dateString,
          heading,
          details,
          image,
          link
        } = req.body;
        
        const announceObject = {
          date: date,
          dateString: dateString,
          heading: heading,
          details: details,
          image: image,
        }
        if(link) announceObject.link = link;

        const addAnnounce = new Announcement(announceObject);
        await addAnnounce.save();
        res.status(201).send({ success: true, addAnnounce });
      } else {
        res.status(401).json({ success: "false", msg: "Authentication error" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
