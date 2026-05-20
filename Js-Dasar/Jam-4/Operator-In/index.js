let mahasiswa = {
    nama: "Bang Esdeh",
    umur: 22,
    jurusan: "Teknik Informatika",
    Npm: undefined
}

let hasil = "Npm" in mahasiswa;
console.log(hasil);
document.write(`Npm: ${mahasiswa.Npm}`);