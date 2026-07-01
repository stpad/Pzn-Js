function hitungMaju(angka) {
    if (angka === 0) {
        return 1;
    }
    let hasil = angka - hitungMaju(angka - 1);
    document.writeln(`Hitung Maju: ${angka} <br>`);
    return hasil;
}

hitungMaju(5);