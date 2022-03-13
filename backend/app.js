const mongoose = require('mongoose');
const express = require('express')
const app = express();
const stuffRoutes = require('./routes/stuff')
// connexion a mongodb
mongoose.connect('mongodb+srv://another_nadjib:nadjib23+@cluster0.ktlew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(express.json())
//pour eviter le probleme du CORS!
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);


module.exports = app;