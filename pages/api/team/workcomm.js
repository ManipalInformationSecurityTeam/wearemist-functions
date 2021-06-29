import dbConnect from "../../../utils/dbConnect";
import Workcomm from "../../../models/Workcomm";

export default async function handler(req, res) {
  await dbConnect();

  const { method, headers } = req;
  if (method === "GET") {
    try {
      const workcomm = await Workcomm.find({});
      res.status(200).json({ success: true, data: workcomm });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      if (headers.auth_api_token === process.env.APP_API) {
        const {
          name,
          photo,
          linkedin,
          webpage,
          email,
          github,
          blog,
          twitter,
          facebook,
          instagram,
          youtube,
        } = req.body;

        const newWorkcommObject = {
          name: name,
          photo: "",
          social: {},
        };
        if (photo) newWorkcommObject.photo = photo;
        if (youtube) newWorkcommObject.social.youtube = youtube;
        if (twitter) newWorkcommObject.social.twitter = twitter;
        if (facebook) newWorkcommObject.social.facebook = facebook;
        if (linkedin) newWorkcommObject.social.linkedin = linkedin;
        if (instagram) newWorkcommObject.social.instagram = instagram;
        if (blog) newWorkcommObject.social.blog = blog;
        if (webpage) newWorkcommObject.social.webpage = webpage;
        if (github) newWorkcommObject.social.github = github;
        if (email) newWorkcommObject.social.email = email;

        const addMember = new Workcomm(newWorkcommObject);
        await addMember.save();
        res.status(201).json(addMember);
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
