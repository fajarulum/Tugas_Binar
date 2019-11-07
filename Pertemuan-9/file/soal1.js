//membuat folder
const fs = require('fs');

fs.mkdir('pertama', (err) => {
	if(err) throw err;
	console.log('Sucsessfuly created new directory');
});
