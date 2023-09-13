
class NewsController {


    // [Get] news
    index(req, res)  {
        res.render('news');
    }


}
// exports
module.exports = new NewsController;