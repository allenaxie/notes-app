const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: [true, 'Title name must be unique'],
        trim: true,
        maxlength: [40, 'Title can not contain more than 40 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter a decription of the note'],
        maxlength: [200, 'Description can not contain more than 200 characters']
    },
}, {
    timestamps: true
});

module.exports = mongoose.models.Note || mongoose.model('Note', noteSchema);