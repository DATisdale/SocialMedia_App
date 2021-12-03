const connectDB = require("./Startup/db.js");
const express = require("express");
const cors = require("cors");
const app = express();
const comment = require("./Routes/comment");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/comments", comment);

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`Server started on port: ${port}`);
});