// in folder Models we build de entity  of the project, in this case all the Devs
const moongose = require('mongoose');
const PointSchema = require('./utils/PointSchema');


const DevSchema = new moongose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    tech: [String],
    location:{
        type:PointSchema,
        index:'2dsphere'
    }
});

module.exports = moongose.model('Dev', DevSchema);