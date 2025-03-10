const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.`);
});