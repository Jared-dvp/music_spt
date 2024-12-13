const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get( '/', (req , res) => {
    res.send('Started Working, Express!');
});

app.listen(PORT, () => {
    console.log(`Server listening at port: ${port}`);
});
