import dbConnect from "../../../utils/dbConnect";
import Alumni from "../../../models/Alumni";

export default async function handler(req, res) {
  await dbConnect();

  const { method, headers } = req;
  if (method === "GET") {
    try {
      const alumni = await Alumni.find({});
      res.status(200).json({ success: true, data: alumni });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      if (headers.auth_api_token === process.env.APP_API) {
        const {
          name,
          photo,
          position,
          year,
          whereabouts,
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

        const newAlumniObject = {
          name: name,
          photo: photo,
          whereabouts: "",
          year: year,
          position: position,
          social: {},
        };
        if (whereabouts) newAlumniObject.whereabouts = whereabouts;
        if (youtube) newAlumniObject.social.youtube = youtube;
        if (twitter) newAlumniObject.social.twitter = twitter;
        if (facebook) newAlumniObject.social.facebook = facebook;
        if (linkedin) newAlumniObject.social.linkedin = linkedin;
        if (instagram) newAlumniObject.social.instagram = instagram;
        if (blog) newAlumniObject.social.blog = blog;
        if (webpage) newAlumniObject.social.webpage = webpage;
        if (github) newAlumniObject.social.github = github;
        if (email) newAlumniObject.social.email = email;

        const addMember = new Alumni(newAlumniObject);
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
