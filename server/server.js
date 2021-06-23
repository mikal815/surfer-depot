const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');
const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');

const { handleError, convertToApiError } = require('./middleware/apiError');

//  mongodb+srv://admin:<password>@cluster0.jbf9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// body parse
app.use(express.json());

// sanitize
app.use(xss());
app.use(mongoSanitize());

// passport
app.use(passport.initialize());
passport.use('jwt', jwtStrategy)

// routes
app.use('/api', routes);


// handle errors
app.use(convertToApiError);
app.use((err, req, res, next) => {
    handleError(err, res)
})




const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});