var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticaleSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    
    summary: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true
    }
});

var Article = mongoose.model("Article", ArticaleSchema);

module.exports = Article;