const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello F*cking World!');
});

app.listen(3000);