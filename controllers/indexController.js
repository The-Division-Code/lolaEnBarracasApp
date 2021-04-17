module.exports = indexController = {

    index: (req, res) => {

        res.render('index.ejs',{seccion: "index"});
    }
}