module.exports = (app) => {

    app.get("/", function (req, res) {
        res.render("land");
    })

    app.get("/signup", function (req, res) {
        res.render("signup");
    })

    app.get("/login", function (req, res) {
        res.render("login");
    })

    app.get("/profile", function (req, res) {
        res.render("profile");
    })
}

