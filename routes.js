const express = require('express');
const {listArticles, readArticle, 
    showForm, createArticle, showFormWithArticle, updateArticle} = require('./controllers/controller.js')

const router = express.Router();

router.get('/', listArticles)
router.get('/article/:id', readArticle)

router.get('/new/article', showForm)
router.post('/new/article', createArticle)

router.get('/edit/article/:id', showFormWithArticle)
router.put('/edit/article/:id', updateArticle)

module.exports = router; 