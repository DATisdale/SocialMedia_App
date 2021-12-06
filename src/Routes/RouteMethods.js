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

router.post('/', async (req, res) => {
    try {
        const {error} = validateComment(req.body);
        if (error)
            return res.status(400).send(error);

        const comment = new Post({
            postId: req.body.postId,
            text: req.body.text,
        });

        await comment.save();

        return res.send(comment);
    }   catch (ex)
})

module.exports=router;