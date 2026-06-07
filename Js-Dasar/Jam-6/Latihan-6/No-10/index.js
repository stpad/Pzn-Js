function cekNilai(nilai){
    if (nilai >=75){
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}
document.write(cekNilai(80));
