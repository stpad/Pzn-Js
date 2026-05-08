let nilai1 = "10";
let nilai2 = 20.9;
let hasil1 = nilai1 + nilai2;
document.writeln(hasil1); // Output: "1020" (konkatenasi string)
document.writeln("<br>");


let hasil2 = parseInt(nilai2) + nilai2;
document.writeln(hasil2);   // Output: 40.9 (konversi string ke number sebelum penjumlahan)
document.writeln("<br>");

let hasil3 = parseFloat(nilai1) + nilai2;
document.writeln(hasil3);   // Output: 30.9 (konversi string ke number sebelum penjumlahan)
document.writeln("<br>");

let hasil4 = String(nilai2) + String(nilai2);
document.writeln(hasil4);   // Output: "20.920.9" (konversi number ke string sebelum konkatenasi)
document.writeln("<br>");

let nilai3 = "Nan";
let hasil5 = parseInt(nilai3) + nilai2;
document.writeln(hasil5);   // Output: NaN (konversi string yang tidak valid menghasilkan NaN)

