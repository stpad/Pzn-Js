console.log (null || "Hello"); // Hello
console.log ("null" || "Hello"); // null
console.log ("" || "Hello"); // Hello
console.log (0 || "Hello"); // Hello

console.log (null && "Hello"); // null
console.log ("null" && "Hello"); // Hello
console.log ("" && "Hello"); // ""
console.log (0 && "Hello"); // 0    

let barang = ["Buku", "Pensil", "Penghapus"];
console.log (barang[0] || barang[1] );    