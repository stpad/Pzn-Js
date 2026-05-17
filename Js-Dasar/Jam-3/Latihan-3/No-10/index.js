let nama = prompt("Masukkan nama Anda:");
let nilai = prompt("Masukkan nilai Anda:");

let data = {
    Nama: nama,
    Nilai: parseInt(nilai)
}

if (data.Nilai >= 75) {
    document.writeln(`Selamat ${data.Nama}! Nilai Anda adalah ${data.Nilai}. Anda Lulus!`);
} else {
    document.writeln(`Maaf ${data.Nama}, Nilai Anda adalah ${data.Nilai}. Anda Tidak Lulus!`);
}