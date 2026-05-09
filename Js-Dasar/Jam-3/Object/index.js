let bocil1 = {
    Nama: "Sutan Gosling",
    Umur: 17,
    Hobi: ["Coding", "Gaming", "Makan", "Tidur"],
    Alamat: {
        Jalan: "Jl. Raya Bogor",
        Kota: "Bogor",
        Negara: "Indonesia"
    }
};

bocil1.Pekerjaan = "Pengganguran";

console.table(bocil1); // Output: Tabel dengan properti dan nilai bocil1
document.writeln(bocil1.Nama); 
document.writeln("<br>");
document.writeln(bocil1.Alamat.Negara);
document.writeln("<br>");
document.writeln(bocil1.Hobi[3]);
document.writeln("<br>");
document.writeln(bocil1.Pekerjaan);