// var express = require("express");
// var router = express.router();
var router = require("express").Router();

var article_controller = require('../controllers/articlesController.js')

router.get("/", article_controller.article);
router.get("/create", article_controller.create);
router.post("/create_article", article_controller.create_article);
router.get("/show/:articleId", article_controller.show);
router.get("/delete/:articleId", article_controller.delete);
router.get("/update/:articleId", article_controller.update);

module.exports = router;