const express = require('express')
const app = express()
const port = 3000 // port aplication

//setup templete engine
app.set('view engine', 'ejs')

//untuk membuat link ke foldes assets
//yang didalamnya file syle.css
app.use('/assets', express.static('assets'))

//route / url aplication
//home page
app.get('/', (req, res) =>{
	res.render('index')
})

//about page
app.get('/about', (req, res) =>{
	res.render('about')
})

//contact page
app.get('/contact', (req, res) =>{
	res.render('contact')
})

//profile page
//untuk menangkap nama dari url
//http://localhost:3000/profile?name=Fajarulum (penulisan di url)
app.get('/profile', (req, res) =>{
	let myJobs = ['Freelancer','Mentor','Penulis']
	res.render('profile', {
		data: req.query,
		jobs: myJobs
	})
})

//set run
app.listen(port,() =>{
	console.log('Yeay ! Your app running on port ${port}!')
})