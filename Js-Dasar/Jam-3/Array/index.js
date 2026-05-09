let data = ["JavaScript", "Python", "Java", "C++"];
document.writeln(data[1]); // Output: "Python"
document.writeln("<br>");
document.writeln(data[2]); // Output: "Java"
document.writeln("<br>");
console.table(data); // Output: Tabel dengan indeks dan nilai array


let angka = [];
angka.push(67 + 90);
angka.push(89);
angka.push(45);
document.writeln(angka.length);    
document.writeln("<br>");
document.writeln(angka.indexOf(89)); // Output: 1
document.writeln("<br>");

angka[2] = 145;
document.writeln(angka[2]); // Output: 145
document.writeln("<br>");

delete angka[1];
document.writeln(angka[1]); // Output: undefined
document.writeln("<br>");
document.writeln(angka[0]); 
document.writeln("<br>");

let array1 = ["A", "B", "C"];
let array2 = [array1, "D", "E", "F"];
console.table(array2); // Output: Tabel dengan array1 sebagai elemen pertama dan "D", "E", "F" sebagai elemen berikutnya