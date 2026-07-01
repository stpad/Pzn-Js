// function recursive(value){
//     let hasil = 1;
//     for (let i = 1; i <= value; i++) {
//         hasil *= i;
//         document.writeln(`Hasil faktorial dari ${i} adalah ${hasil} <br>`);
//     }
// }

// recursive(5);


function recursiveFunction(value){
    // Base case: jika 0, kembalikan 1
    if(value === 0){
        return 1;
    }
    
    // 1. Hitung nilai faktorialnya terlebih dahulu
    let hasil = value * recursiveFunction(value - 1);
    
    // 2. Cetak ke layar
    document.writeln(`Hasil faktorial dari ${value} adalah ${hasil} <br>`);
    
    // 3. Wajib: KEMBALIKAN (return) nilainya agar bisa dikalikan oleh fungsi pemanggil di atasnya
    return hasil;
}

document.writeln(`Hasil Akhir: ${recursiveFunction(4)}`);