const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/', indexRouter);

app.listen(5000, () => {
    console.log(`Listening on 5000`);
})