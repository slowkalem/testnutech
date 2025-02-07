require("dotenv").config();
const http = require("http");
const express = require("express");
const multer = require("multer");
const { CreateNewFolder } = require("./utils/FileUtil");

const BodyParser = require("body-parser");
const { errors } = require("celebrate");
const port = process.env.SERVER_PORT;

const routes = require("./routes");
const { NotFound, BadRequest } = require("./utils/ResponseUtil");

const app = express();

app.use(BodyParser.json({ limit: "50mb" })); //limit upload file
app.use(BodyParser.urlencoded({ extended: false })); //limit upload file

// register base path '/'
app.get("/", (req, res) =>
    res.send(`${process.env.APP_NAME} - ${process.env.APP_VERSION}`)
);

app.use(express.static("./public"));
CreateNewFolder("public/user");

app.use(routes);

// register error handler from Joi->Celebrate
app.use(errors());

// Error handling multer
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
            BadRequest(res, "File max size should be less than 10 MB");
        } else if (error.code === "LIMIT_PHOTO_SIZE") {
            BadRequest(res, "Maksimal Ukuran File Foto Profil adalah 10 MB");
        } else if (error.code === "PHOTO_EXTENTION") {
            BadRequest(res, "File Foto Profil harus berekstensi png, jpeg atau jpg");
        }
    }
});

// set page not found as a default not found url
app.get("*", function (req, res) {
    return NotFound(res, "Page Not Found");
});

const httpServer = http.createServer(app);

httpServer.listen(port, () =>
    console.log(`Server started, listening on port ${port}!`)
);
