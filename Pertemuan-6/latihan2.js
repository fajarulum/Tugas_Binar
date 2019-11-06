//function1
//membuat function dengan 3 parameter
function myProfile(nama,umur,hobi){
	if(umur <= 56){
		//jika umur kurang dari 56
		console.log(`nama saya ${nama}, saya masih aktif bekerja, umur saya ${umur}, saya hobi ${hobi}`);
	}else{
		//jika umur tidak kurang dari atau sama dengan 56
		console.log(`nama saya ${nama}, saya sudah pensiun dan umur saya ${umur} saya hobi ${hobi}`);
	}
}
//pemanggilan function dengan 3 parameter
// 70 adalah number jadi tidak pakai ""
//" " karena string
myProfile('Bambang', 50, 'memancing');


