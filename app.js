let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/posts').Post;

mongoose.connect('mongodb://localhost/travels', { useNewUrlParser: true });

app.get('/posts', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

app.use(express.static('public'));

app.listen(3000, ()=> console.log('Listening 3000...'));