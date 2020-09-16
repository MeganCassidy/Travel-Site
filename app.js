let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let path = require('path');
let postsRouter = require('./routes/posts');
let callbackRequestRouter = require('./routes/callback-requests');


mongoose.connect('mongodb://localhost/travels', { useNewUrlParser: true });
app.use(express.json());
let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
})


app.use(multer({storage: imageStorage}).single('imageFile'));
app.use(express.static('public'));

app.use('/posts', postsRouter);
app.use('/callback-requests', callbackRequestRouter);

app.listen(3000, () => console.log('Listening 3000...'));