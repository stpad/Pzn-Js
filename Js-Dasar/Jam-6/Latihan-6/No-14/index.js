function rataRata(...angka){
    let total = 0;
    for (let i = 0; i < angka.length; i++){
        total += angka[i];
    }
    return total / angka.length;
}

let hasil = rataRata(10, 20, 30, 40, 50);
document.write(`Rata-rata: ${hasil}`);  