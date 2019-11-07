// buat file di folder pertama
const fs = require('fs');

let teks = 'This is my file'
fs.writeFile('./pertama/newfile.txt', teks, (err) =>{
	if(err) throw err;
	console.log('Sucsessfuly created new file in folder pertama!');
});

//console.log('yes')