let login = {
    nama: "Sutan Gosling",
    isLogin: true
}

if (login.isLogin) {
    document.writeln(`Selamat datang, ${login.nama}!`);
} else {
    document.writeln("Silakan login terlebih dahulu.");
}