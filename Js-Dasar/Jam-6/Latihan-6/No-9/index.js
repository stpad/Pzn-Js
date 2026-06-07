function hitungDiskon(harga, diskon = 10){
    let hasil = harga - (harga * diskon / 100);
    return hasil;
}

document.write(`Harga setelah diskon: ${hitungDiskon(100000)}`);