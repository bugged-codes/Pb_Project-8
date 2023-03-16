const express = require('express');
const app = express();
const route = require('./routes/route');
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use('/', route);

app.listen(PORT, () => console.log('Listening on port: ', PORT));
