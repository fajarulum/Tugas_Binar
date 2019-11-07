//creat new file
const fs = require('fs');

let teks = 'This is my file'
fs.writeFile('./pertama/newfile.txt', teks, (err) =>{
	if(err) throw err;
	console.log('Sucsessfuly created new file!');
});

// // read file
fs.readFile('newfile.txt', 'utf-8', (err, data) =>{
	if (err) throw err;
	console.log(data);
});

//creat directory
fs.mkdir('pertama', 'utf-8', (err) =>{
	if(err) throw err;
	console.log('Sucsessfuly created new directory');
});
//tugas :
// create directory
//creat file in directory