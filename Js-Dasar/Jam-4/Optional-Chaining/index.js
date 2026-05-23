let orang = {
    nama : "Budi",
    alamat : {
        jalan: "Jl. Merdeka",
        kota: "Jakarta"
    }
}

let panggil = orang?.alamat?.jalan; // Menggunakan optional chaining untuk mengakses properti jalan
console.log(panggil); // Output: undefined