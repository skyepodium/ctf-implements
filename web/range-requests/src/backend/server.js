const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const MAX_RESPONSE_SIZE = 1600000;

const staticFileMiddleware = (req, res, next) => {
    const filePath = path.join(__dirname, `public/${req.url}`);

    fs.stat(filePath, (err, stat) => {
        if (err) {
            return next();
        }
        if (stat?.size > MAX_RESPONSE_SIZE) {
            return res.status(500).send(`Response size limit exceeded, max response size is ${MAX_RESPONSE_SIZE} bytes`);
        }

        const range = req?.headers?.range;
        console.log('range', range);
        if (!range) {
            res.sendFile(filePath);
            return
        }

        const numberRange = range.replace(/bytes=/, "");
        const start = Number(numberRange?.split('-')?.[0]);
        const end = Number(numberRange?.split('-')?.[1]) || stat.size - 1;

        const files = fs.readFileSync(filePath, 'utf8');

        const responseSize = Buffer.byteLength(files, 'utf8');
        const headers = {
            'Content-Range': `bytes ${start}-${end}/${responseSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': responseSize,
            'Content-Type': 'image/jpeg',
        };

        const file = fs.createReadStream(filePath, { start, end });
        res.writeHead(206, headers);
        file.pipe(res);
    });
};

// response size limit middleware
app.use(staticFileMiddleware);

// static files middleware
app.use(express.static('public'));

// routes handler
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start server
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});