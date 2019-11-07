let pertambahan = (num1, num2) => {
	return `hasil pertambahan ${num1 + num2}`;
}

let pengurangan = (num1, num2) => {
	return `haril pengurangan ${num1 - num2}`;
}

let perkalian = (num1, num2) => {
	return `hasil perkalian ${num1 * num2}`;
}

let pembagian = (num1, num2) => {
	return `hasil pembagian ${num1 / num2}`;
}
//pemanggilan modul
module.exports = {
	//jika penulisan banyak object
	// tambah = nama di index.js
	//pertambahan = nama di calculation.js
	tambah: pertambahan,
	kurang: pengurangan,
	kali: perkalian,
	bagi: pembagian
}