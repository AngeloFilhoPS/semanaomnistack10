const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://MASTER-ACESS:savethisshit@cluster0-c4s4u.mongodb.net/firstdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4444);
