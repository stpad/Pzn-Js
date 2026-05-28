

let nama = prompt("Masukkan nama Anda:");
function isiNama (nama){
    if (nama) {
        document.write(`Halo, ${nama}`);
    } else {
        document.write("Halo, Guest");
    }
}

isiNama(nama);