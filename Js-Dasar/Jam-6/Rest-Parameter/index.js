function angka(...angka) {
    console.table(angka);
}

angka(1,3,4,7,8,9,0,2,5,6)




function sum (namaBuah, ...jumlah){
    let total = 0;
    for (const jml of jumlah) {
        total += jml;
    }
    console.log(`Buah: ${namaBuah}, Total: ${total}`);
}

let jumlahAnggur = [2, 4, 5, 7, 8];


sum("Apel", 1,4,6,7);
sum("Jeruk", 2,5,8,9);
sum("Anggur", ...jumlahAnggur);


//  Arguments Object
function sum2 (namaBuah) {
    let total = 0;
    for (const jml of arguments) {
        total += jml;
    }
    // console.log(`ini arguments: ${arguments}`);
    console.log(`Buah: ${namaBuah}, Total: ${total}`);
}

sum2("Apel", 1,4,6,7);
sum2("Jeruk", 2,5,8,9);
sum2("Anggur", ...jumlahAnggur);