import dbConnect from "../../../utils/dbConnect";
import Originals from "./../../../models/Originals";

export default async function handler(req, res) {
    await dbConnect();
    if (req.method === "POST" && req.headers.client_token === process.env.CLIENT_TOKEN) {
        const {
            name,
            image,
            contentType,
            speakers,
            hosts,
            description,
            link,
            sortOrder
        } = req.body;
        const originalsObject = {
            name: name,
            image: image,
            contentType: contentType,
            speakers: speakers,
            hosts: hosts,
            description: description,
            link: link,
            sortOrder: sortOrder
        };
        const newOriginals = new Originals(originalsObject);
        await newOriginals.save();
        res.status(200).json({ success: true, msg: "MIST Originals content added" });
    } else if (req.method === "GET") {
        try {
            const originals = await Originals.find({}).sort("-sortOrder");
            if (!originals)
                return res.status(409).send({ success: false, msg: 'No MIST Originals content found' });
            res.status(200).json({ success: true, data: originals });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(500).json({ success: false });
    }
}