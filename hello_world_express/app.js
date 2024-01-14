const express = require('express');

const app = express();
const port = process.env.PORT;
const anotherVariable = process.env.VARIABLE_TESTE;

app.get('/', (req, res) => {
    res.send(anotherVariable);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}...`);
});