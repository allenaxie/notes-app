const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: [true, 'Title name must be unique'],
        trim: true,
        maxLength: [40, 'Title can not contain more than 40 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter a decription of the note'],
        maxLength: [200, 'Description can not contain more than 200 characters']
    },

}, {
    timestamps: true,
})

module.exports = mongoose.models.Note || mongoose.models('Note', NoteSchema)