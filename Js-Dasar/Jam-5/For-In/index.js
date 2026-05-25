let orang = {
    nama: `<i>SUTAN GOSLING</i>`,
    umur: 22,
    pekerjaan: "Pengganguran"
}

document.writeln(orang.nama + "<br>");

for (let key in orang) {
    document.write(`${key} : ${orang[key]} <br>`);
}