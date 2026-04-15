let benda1 = "Manggis";
let benda2 = "Jeruk";

let cek1 = benda1 == "Pisang";
let cek2 = benda2 == "Apel";

let hasil = cek1 || cek2;
document.writeln("Di variabel benda ada pisang atau apel?: " + hasil);
document.writeln("<br>");


let nilaiUjian = 70;
let nilaiAbsen = 80;

let lulusUjian = nilaiUjian >= 80;
let lulusAbsen = nilaiAbsen >= 80;

let lulus = lulusUjian && lulusAbsen;

document.writeln("Apakah siswa lulus ujian dan absen?: " + lulus);
document.writeln("<br>");