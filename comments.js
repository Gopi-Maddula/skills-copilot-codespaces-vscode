//create web server
const express = require('express');
const app = express();
//create a port
const port = 3000;
//create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//create a route
app.get('/api/comments', (req, res) => {
    res.send('Hello World!');
});
//run the server
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);

});