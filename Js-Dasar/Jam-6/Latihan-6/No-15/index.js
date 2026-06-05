let nama = prompt(`Masukkan nama`);
let alamat = prompt(`Masukkan alamat`);
let produk = [];
for (let i = 0; i < produk.length; i++){
    let item = prompt(`Masukkan produk ke-${i + 1}`);
    produk.push(item);
}
function buatPesanan(nama = "Guest", alamat = "Tidak Tersedia", ...produk){

}


let hasilPesanan = buatPesanan();
document.write(`Nama: ${hasilPesanan.nama} <br>`);
document.write(`Alamat: ${hasilPesanan.alamat} <br>`);
document.write(`Produk: ${hasilPesanan.produk}`);
