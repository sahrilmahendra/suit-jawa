var tanya;
do{
// menangkap pilihan player
var p = prompt("pilih : gajah, semut, orang");

// menangkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34){
    comp = "gajah";
} else if(comp >= 0.34 && comp < 0.67){
    comp = "orang";
} else{
    comp = "semut";
}
console.log(comp);

var hasil = '';
// menentukan rules
if(p == comp){
    hasil = "SERI"
} else if(p == "gajah"){
    // if(comp == "orang"){
    //     hasil = "MENANG";
    // } else{
    //     hasil = "KALAH";
    // }
    hasil = (comp == "orang") ? "MENANG" : "KALAH";
}  
  else if(p == "orang"){
    //   if(comp == "gajah"){
    //       hasil = "KALAH";
    //   } else{
    //       hasil = "MENANG";
    //   }
    hasil = (comp == "semut") ? "MENANG" : "KALAH";
  }
  else if(p == "semut"){
    //   if(comp == "gajah"){
    //       hasil = "MENANG";
    //   } else{
    //       hasil = "KALAH";
    //   }
    hasil = (comp == "gajah") ? "MENANG" : "KALAH";
  }
  else{
      hasil = "Pilihan yang kamu masukkan SALAH";
  }


// menampilkan hasil
alert("Kamu memilih " + p + " dan Komputer memilih " + comp + "\nmaka hasilnya : kamu " + hasil);

// menanyakan main lagi atau tidak
tanya = confirm("Apakah kamu mau main lagi...?")
}while(tanya)

alert("Terima kasih telah bermain");