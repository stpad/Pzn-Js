function hitungDiskon(harga, diskon = 10){
    let hasil = harga - (harga * diskon / 100);
    document.write(`Harga setelah diskon: ${hasil}`);
    return hasil;
}

hitungDiskon(100000);