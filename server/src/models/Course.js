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
        required: true
    }]

});

const subjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }]
    // TODO - Add relational university based on the course the subject belongs to
});

// TODO - Add the controller here

module.exports = mongoose.model('Course', courseSchema);
module.exports = mongoose.model('Subject', subjectSchema);