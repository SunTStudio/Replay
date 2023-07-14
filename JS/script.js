
// Music Player Start
function safeSound(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/SafeSound.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Safe And Sound";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Different";

	// var iconMusik = document.getElementById('imgMusic');
	// iconMusik.setAttribute("src","img/");
}

function rungkad(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/Rungkad.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Rungkad";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Happy Asmara";

	// var iconMusik = document.getElementById('imgMusic');
	// iconMusik.setAttribute("src","img/");
}

function ello(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/PergiKembali.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Pergi Untuk Kembali";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Ello";

	// var iconMusik = document.getElementById('imgMusic');
	// iconMusik.setAttribute("src","img/");
}

function mwam(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/Raise Your Flag.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Raise Your Flag";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Man With A Mission";

	// var iconMusik = document.getElementById('imgMusic');
	// iconMusik.setAttribute("src","img/");
}

function myWay(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/myWay.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "My Way";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Frank Sinastra";

	// var iconMusik = document.getElementById('imgMusic');
	// iconMusik.setAttribute("src","img/");
}

// Music Player End

//  Langganan Start

function subsFree() {
	var paket = document.getElementById('paketHari');
	paket.innerHTML = "Paket Free";
	var rincian = document.getElementById('rincianPaket');
	rincian.innerHTML = "Paket Free";
	var harga = document.getElementById('hargaPaket');
	harga.innerHTML = "0 IDR";
	var diskon = document.getElementById('diskon');
	diskon.innerHTML = '-';
	var ppn = document.getElementById('ppn');
	ppn.innerHTML = "-";
	var total = document.getElementById('total');
	total.innerHTML = "0 IDR";
	var kadaluarsa = document.getElementById('kadaluarsa');
	kadaluarsa.innerHTML = "-";
}

function subsMonthly(){
	var paket = document.getElementById('paketHari');
	paket.innerHTML = "Paket Premium 30 Hari";
	var rincian = document.getElementById('rincianPaket');
	rincian.innerHTML = "Paket Premium 30 Hari";
	var harga = document.getElementById('hargaPaket');
	harga.innerHTML = "40.000 IDR";
	var diskon = document.getElementById('diskon');
	diskon.innerHTML = '-10.000 IDR';
	var ppn = document.getElementById('ppn');
	ppn.innerHTML = "3000 IDR";
	var total = document.getElementById('total');
	total.innerHTML = "33.000 IDR";
	var kadaluarsa = document.getElementById('kadaluarsa');
	kadaluarsa.innerHTML = "*Masa Berlaku Langganan 30 Hari";
}


function subsYears(){
	var paket = document.getElementById('paketHari');
	paket.innerHTML = "Paket Premium Satu Tahun";
	var rincian = document.getElementById('rincianPaket');
	rincian.innerHTML = "Paket Premium Satu Tahun";
	var harga = document.getElementById('hargaPaket');
	harga.innerHTML = "350.000 IDR";
	var diskon = document.getElementById('diskon');
	diskon.innerHTML = '-50.000 IDR';
	var ppn = document.getElementById('ppn');
	ppn.innerHTML = "30.000 IDR";
	var total = document.getElementById('total');
	total.innerHTML = "330.000 IDR";
	var kadaluarsa = document.getElementById('kadaluarsa');
	kadaluarsa.innerHTML = "*Masa Berlaku Langganan Satu Tahun";
}

// Langganan End
