const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray= require('../utils/parseStringAsArray');

// index, show, update, store, destroy

module.exports = {
    async index(resquest,response){
        const devs=await Dev.find();
        return response.json(devs);
    }  ,

    async store(resquest, response){
        const { github_username, tech,latitude, longitude} = resquest.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            let { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(tech);
        
            const location = {
                type: 'Point',
                coordinates :[longitude,latitude],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                tech:    techsArray,
                location,
            })
    

        }
    
    
    
        return response.json(dev);
    }
}