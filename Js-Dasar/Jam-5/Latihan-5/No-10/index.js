let nama = prompt("Masukkan nama Anda:");
let namaFinal = nama || "Guest";
function isiNama(namaFinal) {
   
     while (namaFinal) {
        alert(`Halo ${namaFinal}`);
        namaFinal =  prompt("Masukkan nama Anda:");  
    }

    alert(`Halo Guest`);
}

isiNama(namaFinal);