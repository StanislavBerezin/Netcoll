// This file controls the schema for courses and subjects

const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: {             // Course Name
        type: String,
        required: true
    },
    code: {             // Course Code
        type: String,
        required: true
    },
    university: [{      // University the course belongs to
        type: mongoose.Schema.Types.ObjectId,
        ref: 'University',
        required: true}]

});

// TODO - Add the controller here

module.exports = mongoose.model('Course', courseSchema);