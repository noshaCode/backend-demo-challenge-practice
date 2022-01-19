
const Article = require('../models/article')

const listArticles = (req, res) => {

    // MONGODB GIVE ME ALL ARTICLES
 Article.find()
     .then((result)=>{
    
        res.render("index", {result});
    })
    .catch((err)=>{
        console.log(err);
    }) 

}

const readArticle = (req, res) => {
    const id = req.params.id;

    Article.findById(id)
    .then((result)=>{
        res.render("readArticle", {
            title: result.title, 
            article: result.article
        });
    })
    .catch((err)=>{
        console.log(err);
    }) 
}

const showForm = (req, res) => {
    res.render('createArticle')
}

const createArticle = (req, res) => {
    // POST request to save article in database
    const body = req.body
    // SAVE TO DATABASE
    const newArticle = new Article({
        title: body.title,
        article: body.article
    });

    newArticle.save()
        .then((result)=> {
            res.redirect('/')
        })
        .catch((error)=> {
            console.log('error saving article', error)
            res.redirect('/')
        })
}

const showFormWithArticle = (req, res) => {
    const id = req.params.id;
    res.send("showFormWithArticle")
}

const updateArticle = (req, res) => {
    // POST request to save article in database
    const body = req.body
    const id = req.params.id;
    res.send("updateArticle")
}


module.exports = { listArticles, readArticle, 
    showForm, createArticle, showFormWithArticle, updateArticle }