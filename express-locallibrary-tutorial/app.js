var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require ('mongoose'); //REQUIRE MONGOOSE
var Schema = mongoose.Schema; //REQUIRE SCHEMA FORM MONGOOSE
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/article');

let mongodb = "mongodb+srv://fajar:fajar4546@cluster0-uyk10.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongodb, {useNewUrlParser: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(){
	console.log('Success connection')
});
//EXAMPLE USE MODEL MONGOOSE, SCHEMA AND METHOD MONGOOSE
// const CatSchema = new Schema({
// 	name: String,
// 	age: {
// 		type: Number,
// 		required: true,
// 		min: [5, 'Terlalu muda miaw'],
// 		max: 19
// 	}
// });
// //VIRTUAL
// CatSchema.virtual('speak').get(function(){
// 	console.log(`${this.name} can speak, meaw!`);
// });
// //METHODS
// CatSchema.methods.hello = function(){
// 	let teks = `hello, my name ${this.name}, age${this.age}, Miaoww...miaoww..`;
// 	console.log(teks); 
// };
// //CREAT MODEL
// const Cat = mongoose.model('Cat', CatSchema); 
// 	// name: String,
// 	// age: Number 

// //SET DATA INTO MODEL
// const ugly = new Cat({
//  name: 'ugly',
//  age: 5
//  });
// //CALL METHODS IN MODEL
// // ugly.hello();
// // ugly.save().then(() => console.log('meow'));
// //SAVING DATA
// ugly.save(function(err, result){
// 	if (err) console.log(err.message);
// 	ugly.hello()
// });

var app = express();


//untuk membuat link ke foldes assets
//yang didalamnya file style.css
// app.use('/assets', express.static('assets'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
