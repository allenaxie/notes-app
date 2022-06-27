import dbConnect from "../../../utilities/dbConnect";
import Note from '../../../models/note';

dbConnect();

export default async function handler (req,res) {
    const {
        query: {id},
        method
    } = req;

    if (method === 'GET') {
        try {
            const note = await Note.findById(id);

            if (!note) {
                res.status(400).json({success: false});
            }

            res.status(200).json({success: true, data: note});
        } catch(error) {
            console.log(error);
            res.status(400).json({success: false})
        }
    } else if (method === 'PUT') {
         try {
            // find and update note
            const note = await Note.findOneAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
            });
            // if note doesn't exist, return error
            if(!note) {
                console.log("note does not exist")
                res.status(400).json({success: false});
            }
            // if successful
            res.status(200).json({success: true, data: note});

         } catch (error) {
            console.log(error);
            res.status(400).json({success: false})
         }
    } else if (method === 'DELETE') {
        try {
            // find and delete note
            const deletedNote = await Note.findOneAndDelete({_id : id});
            // if note doesn't exist
            if (!deletedNote) {
                res.status(400).json({success: false});
            }
            // if note exists
            res.status(200).json({success: true, data: deletedNote});
        } catch (error) {
            console.log(error);
            res.status(400).json({success: false})
        }
    } else {
        res.status(400).json({success: false});
    }
}
    