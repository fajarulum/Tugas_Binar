// let nilai1 = 10;
// let nilai2 = 2;
// let hasil = nilai1 - nilai2;

function Calculator(operasi,nilai1,nilai2){

	// console.log(`hasil ${operasi} ${nilai1} dan ${nilai2} adalah ${hasil}`);
	let result = ''; //untuk menyimpan nilai result
	if (operasi === "pertambahan") {
		result = nilai1 + nilai2
	 } else if (operasi === "pengurangan") {
	 	result = nilai1 - nilai2
	 } else if (operasi === "perkalian") {
	 	result = nilai1 * nilai2
	 }else{
	 	return 'nama operasi tidak tersedia' //menampilkan jika input nama operator salah
	 }
	 return `hasil ${operasi} ${nilai1} dan ${nilai2} adalah ${result}`; 
	
}

console.log(Calculator("pertambahan", 10,10));