import dbConnect from "../../../utils/dbConnect";
import Board from "../../../models/Board";

export default async function handler(req, res) {
  await dbConnect();

  const { method, headers } = req;
  if (method === "GET") {
    try {
      const board = await Board.find({});
      res.status(200).json({ success: true, data: board });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      if (headers.auth_api_token === process.env.APP_API) {
        const {
          name,
          photo,
          about,
          position,
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

        const newBoardObject = {
          name: name,
          photo: photo,
          position: position,
          about: about,
          social: {},
        };
        if (youtube) newBoardObject.social.youtube = youtube;
        if (twitter) newBoardObject.social.twitter = twitter;
        if (facebook) newBoardObject.social.facebook = facebook;
        if (linkedin) newBoardObject.social.linkedin = linkedin;
        if (instagram) newBoardObject.social.instagram = instagram;
        if (blog) newBoardObject.social.blog = blog;
        if (webpage) newBoardObject.social.webpage = webpage;
        if (github) newBoardObject.social.github = github;
        if (email) newBoardObject.social.email = email;

        const addMember = new Board(newBoardObject);
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
