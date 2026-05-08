let data = ["JavaScript", "Python", "Java", "C++"];
document.writeln(data[1]); // Output: "Python"
document.writeln("<br>");
document.writeln(data[2]); // Output: "Java"
document.writeln("<br>");
console.table(data); // Output: Tabel dengan indeks dan nilai array


let angka = [];
angka.push(67);
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