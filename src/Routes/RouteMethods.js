const express = require("express");
const{Reply, Post, validateComment}=require("../models/Comment");
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

        const post = new Post({
            postId: req.body.postId,
            text: req.body.text,
        });

        await post.save();

        return res.send(post);
    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
});

router.put('/:postId', async (req, res) => {
    try {

        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            {
                ...req.body
            },
            {new:true}
        );

        if (!post)
            return res.status(400).send(`The post requested does not exist.`)

        await post.save();

        return res.send(post);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
});

module.exports=router;