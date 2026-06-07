function buatPesanan(nama = "Guest", alamat = "Tidak Tersedia", ...produk){
    let pesanan = {
        nama: prompt(`Masukkan nama`) || nama,
        alamat: prompt(`Masukkan alamat`) || alamat,
        produk: []
    };
    do {
        let item = prompt(`Masukkan produk ke-${pesanan.produk.length + 1} (ketik "berhenti" untuk selesai)`);
        if (item === "") {
            alert("Produk tidak boleh kosong. Silakan masukkan produk yang valid.");
        } else if (item === null) {
            break;
        }
         else if  (item.toLowerCase() === "berhenti") {
            break;
        } 
        else {
            pesanan.produk.push(item);
        }
    } while (true);

    return pesanan;
}


let hasilPesanan = buatPesanan();
document.write(`Nama: ${hasilPesanan.nama} <br>`);
document.write(`Alamat: ${hasilPesanan.alamat} <br>`);
document.write(`Produk: ${hasilPesanan.produk}`);
