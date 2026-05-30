function namaPanjang(namaDepan, namaBelakang){
    let halo = `Halo ${namaDepan} ${namaBelakang}`;
    // let halo2 = `HIDUP JOKOWI`;
    return halo;
}

let a = "Sutan";
let b = "Gosling";

let panggil = namaPanjang(a, b);
document.writeln(`<h1>${panggil}</h1>`);



//  kalo return nya banyak

function nilaiUjian(nilai){
    if (nilai >= 100){
        return "Nilai A";
    } else if (nilai >= 80){
        return "Nilai B";
    } else if (nilai >= 60){
        return "Nilai C";
    }   else if (nilai >= 40){
        return "Nilai D";
    } else {
        return "Nilai E";
    }
}

let hasil = nilaiUjian(90);
document.writeln(`<p>${hasil}</p>`);

// return bisa stop perulangan

function dataAngka(dataA, dataB){

    for (let i of dataA){
        if (i  === dataB){
            return `Data ditemukan ${i}`;
        }
    }
    return "Data tidak ditemukan";
}

let pencarian = dataAngka([1, 2, 3, 4, 5], 7);
document.writeln(`<p>${pencarian}</p>`);