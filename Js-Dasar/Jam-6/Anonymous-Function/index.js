
// anonymous function di variabel
let data = function(namaBarang, ...jumlah){
    let total = 0
    for (const jml of jumlah){
        total += jml;
    }
    document.write(`Nama Barang: ${namaBarang}, Total: ${total} <br>`);
}

data("Buku", 1, 2, 3, 4, 5);




// anonymous function di parameter
function hitung(angka){
   angka(60, 40);
}

hitung(function(angka1, angka2){
    document.write(`Penjumlahan: ${angka1} + ${angka2} = ${angka1 + angka2} <br>`);
}
);
