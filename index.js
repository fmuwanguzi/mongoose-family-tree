const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

//shortcut to mongoose connections
const db = mongoose.connection;
db.once('open', () =>{
    //printing to see what the host and port MongoDb is on
    console.log(`connected to MongoDB on ${db.host}:${db.port}`)
})

//will log any database errors
db.on('error', (err)=>{
    console.error(`Database error ${err}`);
})

app.get('/', (req, res)=>{
    res.send('Mongoose');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT}`)
})

