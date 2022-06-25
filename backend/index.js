const express = require("express");
const app = express();
const connect = require("./config/db");
const dotenv = require("dotenv");


connect();

dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Success working Server");
});
app.use("/api/user", require("./router/user"));
app.use("/api/user/galery", require("./router/banner"));
app.use("/api/user/history", require("./router/history"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log("Server running");
});