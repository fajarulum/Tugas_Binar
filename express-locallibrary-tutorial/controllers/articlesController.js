let Article = require('../models/articles');

// Display list of all Authors.
exports.article = function(req, res) {
	Article.find({}, function(err, result){
		if (err) throw err;
		res.render('articles/article',{data: result}); //untuk menampilkan filenya
	});
};

exports.create = function(req, res, next){
	res.render('articles/create');
};

exports.create_article = function(req, res, next){
	// res.render('articles/creat_article');
	console.log(req.body)
	let article = new Article(req.body)
	article.save(function(err, result){
		if(err){
			console.log(err.message)
		}else{
			res.redirect('/articles') //untuk membuka linknya
		}
	});
};
exports.show = function(req, res, next){
	let params = req.params;
	console.log(params)
	Article.findOne({_id: params.articleId}, function(err, result){
		res.render('articles/show', {
			data: result
		});
	});
};
exports.delete = function(req, res, next){
	let articleId = req.params.articleId;
	Article.findOneAndDelete({_id: articleId}, function(err, article){
		if (err){
			res.redirect('/articles?message=Failed delete article!');
		
		}else{
			res.redirect('/articles?message=Succes delete article!');
		}
	})
};
exports.update = function(req, res, next){
	let articleId = req.params.articleId;
	console.log(articleId)
	Article.findOne({_id: articleId}, function(err, result){
		res.render('articles/update',{
			data: result
		});
	});
};
	
// exports.delete = function(req, res, next){
// 	Article.deleteOne({}, function(err, result){
// 		if (err) return handleError(err);
// 		res.render('articles/article', {data: result});
// 	});
// };

// exports.category = function(req, res, next){
// 	res.render('articles/category');
// };