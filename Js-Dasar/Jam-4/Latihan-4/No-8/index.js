let nilai = 85;
let nickname = null;

let cekNilai = nilai >= 75 ? "Lulus" : "Tidak Lulus";
let cekNama = nickname ?? "Guest"; 

document.write(`${cekNama} dinyatakan ${cekNilai}`);