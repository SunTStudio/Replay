function takSegampangItu(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/SafeSound.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Tak Segampang Itu";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Anggi Marito";

	var iconMusik = document.getElementById('imgMusic');
	iconMusik.setAttribute("src","img/Anggi.png");
}
function takInginUsai(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/SafeSound.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Tak Ingin Usai";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Keisya Levronka";

	var iconMusik = document.getElementById('imgMusic');
	iconMusik.setAttribute("src","img/keisya.png");
}
function doakuUntukmuSayang(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/SafeSound.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Doaku Untukmu Sayang";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Wali Band";

	var iconMusik = document.getElementById('imgMusic');
	iconMusik.setAttribute("src","img/walinagaswara.png");
}

function sahara(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/SafeSound.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Sahara";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Wisnu Shantika";

	var iconMusik = document.getElementById('imgMusic');
	iconMusik.setAttribute("src","img/wisnushantika.png");
}
function banyuLangit(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/SafeSound.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Banyu Langit";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "Didi Kempot";

	var iconMusik = document.getElementById('imgMusic');
	iconMusik.setAttribute("src","img/didikempot.png");
}
function rapsodi(){
	var fileMusik = document.getElementById('song');
	fileMusik.setAttribute("src", "audio/SafeSound.mp3");

	var namaMusik = document.getElementById('nameSong');
	namaMusik.innerHTML = "Rapsodi";

	var namaPenyanyi = document.getElementById('nameSinger');
	namaPenyanyi.innerHTML = "JKT48";

	var iconMusik = document.getElementById('imgMusic');
	iconMusik.setAttribute("src","img/jkt48.png");
}

function wali(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Doaku Untukmu Sayang";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Wali";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/walinagaswara.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Wali";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Wali';
        gambarAlbum[i].setAttribute("src","img/walinagaswara.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listWali = ["Nenekku Pahlawanku","Ya Allah","Harga Diriku","Ada Gajah dibalik Batu","Cari Jodoh","Emang Dasar"];
        for(var j = 0; j < listWali.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listWali[j];
            }
        }
    }

}

function jkt48(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Rapsodi";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "JKT48";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/jkt48.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="JKT48";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='JKT48';
        gambarAlbum[i].setAttribute("src","img/jkt48.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listjkt48 = ["Pajama Drive","Heavy Rotation","Refrain Penuh Harapan","Rapsodi","Fly High","River"];
        for(var j = 0; j < listjkt48.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listjkt48[j];
            }
        }
    }    
}

function tulus(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Monokrom";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Tulus";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/tulus.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Tulus";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Tulus';
        gambarAlbum[i].setAttribute("src","img/tulus.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listTulus = ["Monokrom","Gajah","Hati-Hati di Jalan","Pamit","Interaksi","1000 Tahun Lamanya"];
        for(var j = 0; j < listTulus.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listTulus[j];
            }
        }
    }
}

function bravesboy(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Putuskan Saja Pacarmu";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Bravesboy";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/bravesboy.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Bravesboy";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Bravesboy';
        gambarAlbum[i].setAttribute("src","img/bravesboy.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listBravesboy = ["Kamu Seperti Jogja","Putuskan Pacarmu","Hukum Aku Tuhan","Cepatlah Mati","Aku Harus Jahat","Putuskan Saja Pacarmu"];
        for(var j = 0; j < listBravesboy.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listBravesboy[j];
            }
        }
    }
}

function dennycaknan(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Kartoyono Medot Janji";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Deny Caknan";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/denycaknan.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Deny Caknan";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Deny Caknan';
        gambarAlbum[i].setAttribute("src","img/denycaknan.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listdenycaknan = ["Kartoyono Medot Janji","Los Dol","Hukum Aku Tuhan","Satru","Kalih Welasku","Crito Mustahil"];
        for(var j = 0; j < listdenycaknan.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listdenycaknan[j];
            }
        }
    }
}

function kufaku(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Cuma Kamu";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Kufaku Band";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/kufaku.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Kufaku Band";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Kufaku Band';
        gambarAlbum[i].setAttribute("src","img/kufaku.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listkufaku = ["Cuma Kamu","Berok Bakau","Cuma Kamu","Berok Bakau","Cuma Kamu","Berok Bakau"];
        for(var j = 0; j < listkufaku.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listkufaku[j];
            }
        }
    }
}

function feelkoplo(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Terbaik Untukmu";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Feel Koplo";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/feelkoplo.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Feel Koplo";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Feel Koplo';
        gambarAlbum[i].setAttribute("src","img/feelkoplo.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listfeelkoplo = ["Besok","Los Dol","Hura-Haru","Terbaik Untukmu","Star-Link","Berdiri Teman"];
        for(var j = 0; j < listfeelkoplo.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listfeelkoplo[j];
            }
        }
    }
}

function aftershine(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Aku Ikhlas";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Aftershine";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/aftershine.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Aftershine";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Aftershine';
        gambarAlbum[i].setAttribute("src","img/aftershine.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listaftershine = ["Aku Ikhlas","Yowes Modaro","Tekan Semene","Aku Sing Lungo","Kuatno Atimu","Rakuat Nglakoni"];
        for(var j = 0; j < listaftershine.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listaftershine[j];
            }
        }
    }
}

function happyasmara(){
    var namaMusik = document.getElementById("nameSong");
    namaMusik.innerHTML = "Sadar Posisi";

    var namaPenyanyi = document.getElementById('nameSinger');
    namaPenyanyi.innerHTML = "Happy Asmara";

    var iconMusik = document.getElementById('imgMusic');
    iconMusik.setAttribute("src","img/hapyasmara.png");

    var judulAlbum= document.getElementById('albumNama');
    judulAlbum.innerHTML="Happy Asmara";

    var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
    var gambarAlbum= document.getElementsByClassName('gambarAlbum');
    for(var i=0; i < penyanyiAlbum.length;i++){
        penyanyiAlbum[i].innerHTML='Happy Asmara';
        gambarAlbum[i].setAttribute("src","img/hapyasmara.png");
    }

    var albumLagu =  document.getElementsByClassName('albumLagu');
    for(var i = 0; i < albumLagu.length;i++){
        var listhappyasmara = ["Ngopi Maszeh","Kembang Wangi","Nemen","Rungkad","Dadi Siji","Satu Rasa Cinta"];
        for(var j = 0; j < listhappyasmara.length;j++){
            if(i==j){
                albumLagu[i].innerHTML=listhappyasmara[j];
            }
        }
    }
}

function ungu(){
        var namaMusik = document.getElementById("nameSong");
        namaMusik.innerHTML = "Demi Waktu";

        var namaPenyanyi = document.getElementById('nameSinger');
        namaPenyanyi.innerHTML = "Ungu";

        var iconMusik = document.getElementById('imgMusic');
        iconMusik.setAttribute("src","img/ungu.png");

        var judulAlbum= document.getElementById('albumNama');
        judulAlbum.innerHTML="Ungu";

        var penyanyiAlbum= document.getElementsByClassName('penyanyiAlbum');
        var gambarAlbum= document.getElementsByClassName('gambarAlbum');
        for(var i=0; i < penyanyiAlbum.length;i++){
            penyanyiAlbum[i].innerHTML='Ungu';
            gambarAlbum[i].setAttribute("src","img/ungu.png");
        }

        var albumLagu =  document.getElementsByClassName('albumLagu');
        
        for(var j = 0; j < albumLagu.length;j++){       
            var listungu = ["Demi Waktu","Sejauh Mungkin","Cinta Dalam Hati","Bismillah Cinta","Andai Ku Tahu","Luka Disini"];
            albumLagu[j].innerHTML=listungu[j];
        }

    
}