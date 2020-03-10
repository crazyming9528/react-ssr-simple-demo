const express = require('express');
const path = require('path');
const page = require("./page.generator.js").page;
const app = express();
const port = 8088;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", function (req, res) {
    let props = {
        initialCount: 100
    };
    var html = page(props);
    res.end(html)
});


app.listen(port, function () {
    console.log(`运行在http://localhost:${port}`);
});

