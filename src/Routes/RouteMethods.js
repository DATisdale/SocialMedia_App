const express = require("express");
const{Reply, Comment, validateComment}=require("../Models/Comment");
const router=express.Router();

router.get("PLACEHOLDER", async (req, res) => {
    try {
        const comments = await Comment.find();
        return res.send(comments);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

