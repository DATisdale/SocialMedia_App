const express = require("express");
const{Reply, Post, validateComment}=require("../Models/Comment");
const router=express.Router();

router.get("/:postID", async (req, res) => {
    try {
        const posts = await Post.find();
        return res.send(posts);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports=router;