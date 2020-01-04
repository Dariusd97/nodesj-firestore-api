const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const categoryRoutes = require('./routes/categoryRoutes')
const bookRoutes = require('./routes/bookRoutes')
const app = express();

const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json());
app.use('/category', categoryRoutes);
app.use('/book', bookRoutes);

app.listen(port, () => { console.log('Server is running on port 8081')})