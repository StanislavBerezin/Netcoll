// This file controls the schema for universities
// Data will be updated from https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json

const mongoose = require('mongoose');

const universitySchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: {                 // Name of the university
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    domains: {          // List of internet domains associated with the university
        type: [],
        required: true
    }

});

// TODO - Add the controller here

module.exports = mongoose.model('Univsersity', universitySchema);