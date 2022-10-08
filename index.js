const router = require('./routes');
const express = require('express');
const app = express();
app.use(router)
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Listening on Port :-', PORT)
    }
})