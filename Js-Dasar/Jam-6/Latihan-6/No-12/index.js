function buatProfil(nama, umur, kota){
    let profil = {
        nama: nama,
        umur: umur,
        kota: kota
    }
    return profil;
}

let panggilProfil = buatProfil("Sutan Gosling", 22, "Jakarta");
document.write(panggilProfil.nama + "<br>");
document.write(panggilProfil.umur + "<br>");
document.write(panggilProfil.kota + "<br>");
