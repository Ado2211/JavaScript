const express = require('express');

const app = express();



app.use("/", express.static(__dirname +'/public'));

app.use((request, response) => {
    response.status(404);
    response.send('page not found');
})
app.listen(3000);