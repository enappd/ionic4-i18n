const express = require("express");
const app = express();
const path = require('path');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.listen(3000, () => {
    console.log("Server Started at", process.env.PORT || 3000);
});