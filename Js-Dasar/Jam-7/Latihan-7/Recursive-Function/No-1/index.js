function hitungMundur(angka) {
    if (angka === 0) {
        return 1;
    }
    document.writeln(`Hitung Mundur: ${angka} <br>`);
    let hasil = hitungMundur(angka - 1);
    return hasil;
}

hitungMundur(5);