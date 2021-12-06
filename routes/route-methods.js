const express = require("express");
const{Reply, Post, validatePost}=require("../models/comment");
const{Signup, validateSignup}= require("../models/signup")
const router=express.Router();

router.get("PLACEHOLDER", async (req, res) => {
    try {
        const posts = await Post.find();
        return res.send(posts);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
router.get("PLACEHOLDER", async (req, res) => {
    try {
        const profile = await Signup.find();
        return res.send(profile);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;
