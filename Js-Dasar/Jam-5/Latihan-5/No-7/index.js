let profil = {
   nama:"Ryan",
   umur:25,
   kota:"Bandung"
};

for (let key in profil) {
    document.write(`${key} : ${profil[key]} <br>`);
}