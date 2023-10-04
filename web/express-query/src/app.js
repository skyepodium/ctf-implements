const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.get("/image", (req, res) => {
    const { imageName } = req.query;

    if (!imageName || imageName.length != 1) {
        res.status(500);
        res.send({ error: "file not found" });
        return;
    }

    // 이미지 파일의 경로
    const imagePath = path.resolve(`./image/${imageName}.png`);

    // 이미지 파일을 읽어서 응답으로 보냄
    fs.readFile(imagePath, (err, data) => {
        if (err) {
            res.status(404).send({ error: "Image not found" });
        } else {
            // 이미지를 전송하기 위해 content-type을 설정
            res.contentType("image/png");
            res.send(data);
        }
    });
});

app.get("/", (_, res) => {
    res.sendFile(path.resolve("index.html"));
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})