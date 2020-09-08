let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/posts').Post;

mongoose.connect('mongodb://localhost/travels', { useNewUrlParser: true });

let post1 = new Post({
    id: 2,
    title: 'Statue of liberty',
    date: new Date(),
    description: 'Some description',
    text: 'Some text',
    country: 'USA',
    imageURL: '/images/1.jpg'
});

post1.save();

app.use(express.static('public'));

app.listen(3000, ()=> console.log('Listening 3000...'));