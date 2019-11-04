##Tugas

1.Perbedaan antara bahasa pemrograman compiler dan interpreter :

-interpreter menterjemahkan baris per baris. Sedangkan compiler, menterjemahkan seluruh instruksi sekaligus. Selanjutnya hasil terjemahan bisa dijalankan secara langsung, tanpa tergantung lagi oleh program sumber atau compilernya.

-Pada interpreter, penyusunan program relatif lebih cepat dan bisa langsung diuji sekalipun masih ada beberapa kesalahan secara kaidah dalam program. Sedangkan pada compiler, proses pembuatan dan pengujian membutuhkan waktu relatif lebih lama, sebab ada waktu untuk mengkompilasi (menerjemahkan) dan ada pula waktu untuk melakukan proses linking.

-Compiler membutuhkan linker untuk menggabungkan kode objek dengan berbagai macam library demi menghasilkan suatu kode yang bisa dijalankan oleh mesin. Sedangkan interpreter tidak butuh linker untuk menggabungkan kode objek.

-Pada interpreter, kode program tidak dapat dirahasiakan. Sedangkan pada compiler, kode program bisa dirahasiakan, sebab yang dieksekusi adalah program yang dalam bentuk kode mesin.

-Bahasa pemrograman yang menggunakan compiler adalah Visual Basic, Fortran, Cobol, Pascal, dan C. Sedangkan bahasa pemrograman yang menggunakan interpreter yaitu PHP, ASP, dan Perl.

[lebih jelasnya klik ini!](https://www.dictio.id/t/apakah-perbedaan-antara-compiler-dan-interpreter/12780/3)

2.[Membaca](https://www.geeksforgeeks.org/overview-of-data-structures-set-1-linier-data-structures/)

3.
* variabel adalah simbol yang memili nilai
	*contoh dalam java script
	1. var a= "apakabar";
	2. let b= "sehat";
	3. const c= "baik";
	-console.log(a/b/c)

* control flow adalah sebuah cara untuk memberi tahu program intruksi apa yang harus dijalankan 
	*contoh dalam java script
	1. var message = "apa kabar";
	-if (true){

	-}
	-console.log(message);

	2. var nilai = 5;
		-if(nilai === 5){
		-console.log("benar")
		-}else{
		-console.log("salah")
		-}

	3. var x= 20;
		-if(x>30)
		-console.log("x lebih besar dari 30")
		-else if(x>20)
		-console.log("x lebih besar dari 20")
		-else if(x<20)
		-console.log("x lebih kecil dari 20")
		-else
		-console.log("x adalah 20")

* operator adalah sebuah aritmatika dalam program
	*contoh dalam java script
	1. var a =  4;
	-	var b = 2;
	-	console.log(a+b)

	2. var a = 3;
	-	var b = 2;
	-	console.log(a-b)

	3. var a = 10;
	- 	var b = 2;
	-	console.log(a/b)

* type data adalah klasifikasi data yang mengenalkan kompilator atau penerjemah bagaimana programer bermaksud untuk menggunakana data.
	*contoh dalam java script
	1. type data string : 
	- var data = "nama";
	- console.log(typeof(data))

	2. type data number:
	- var data = 1000;
	- console.log(typeof(data))

	3. type data object:
	- var data = [3,2,5,1];
	- console.log(typeof(data))

