Cara membuat akun github
========================
1.buka link [github](https://www.github.com)
2.masukan data diri sesuai dengan tertera

Cara setup ssh github
======================
1.masuk ke terminal
2.ketik perintah cd ~/.ssh, jika directory nya ada maka anda akan masuk ke directory SSH
3.jika directory SSH nya tidak ada, maka anda bisa membuatnya sendiri dengan perintah mkdir ~/.ssh
4.buat SSH key dengan perintah ssh-keygen -t rsa -C "nama@email.com" -b 4096
-anda diminta untuk masukan nama_id SSH and passphrasenya
-anda bisa mengosongkan passphrasenya
5.sekarang didalan folder SSH tadi akan ada 2 file baru dengan nama sesuai dengan nama_id,untuk melihat isi folder SSHnya ketik perintah ls
-maka akan muncul file dengan ekstendi.pub adalah punlic keynya dan file tanpa ekstensi adalah private keynya
-sekarang mengambil isi dari public key tadi dengan perintah cat nama_id.pub
6.kemudian copy key tsb dan paste di github SSH nya
7.kemudian save

Cara membuat repository
=======================
1.klik tanda + yang ada pada github nya
2.pilih new repository
3.buat nama repository
-repository name : berfungsi sebagai nama repositor
-Description : deskripsi repositori
Public or Private : jika Public berarti repositor kita bisa dilihat oleh orang lain, jika Private hanya bisa dilihat sendiri
README : artinya semcam penjelasan /tutorial

Cara push ke remote repository
==============================
1.klik kanan dan klik git bash here
2.ikuti perintah git config --global user.email nama@email.com
3.masukan git init : fungsi untk meinisialisasi github kedalam folder tsb
4.masukan git add. : fungsi menambahkan semua file yang akan dimasukan kedalam keranjang dan siap diupload
5.masukan git commit-m "First Commit" : fungsi untuk menulis apa yang anda rubah, first commit berarti anda melakukan upload pertama kalinya
6.copy baris di github tsb git remote add origin https://github.com/kiddyatreides/namafile.git
7.paste di terminal, jika sudah file siap di upload
8.git push origin master