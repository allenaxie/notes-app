import dbConnect from "../../../utilities/dbConnect";
import Note from '../../../models/note';

export default async function handler (req,res) {
    const {method} = req;
    
    dbConnect();

    switch(method) {
        // if 'GET' method
        case 'GET':
            try {
                // find all notes
                const notes = await Note.find({});
                // console.log(`notes: ${notes}`);
                res.status(200).json({success: true, data: notes});
            } catch (error) {
                console.log(error);
                res.status(400).json({success: false})
            }
            break;
        // if 'POST' method
        case 'POST':
            try {
                // create note
                const note = await Note.create(req.body);
                res.status(201).json({success: true, data: note});
            } catch (error) {
                console.log(error);
                res.status(400).json({success: false});
            }
            break;
        // else
        default: 
            res.status(400).json({success: false});
            break;
    }
}