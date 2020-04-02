var db = require("../models")

module.exports = (app) => {
    app.get("/scrape", function (req, res) {
        axios.get("https://www.washingtonpost.com/science/").then(function (response) {
            var $ = cheerio.load(response.data);
    
            $("div.story-body").each(function (i, element) {
                var result = {};
    
                result.headline = $(this).find("h2").children("a").text();
    
                result.url = $(this).find("h2").children("a").attr("href");
    
                result.summary = $(this).find("div.story-description").children("p").text();
    
                db.Article.create(result)
                    .then(function (dbArticle) {
                        console.log(dbArticle)
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
    
            })
            res.send("Scrape Complete");
        })
    });
}