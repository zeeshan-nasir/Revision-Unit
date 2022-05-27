const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    tweet_id: { type: String, required: true },
    tweet_content: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, default: Date.now },
});

const TweetSchema = mongoose.model("tweet", tweetSchema);

module.exports = TweetSchema;
