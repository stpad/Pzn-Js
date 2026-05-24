let itung = 10;

while (true) {
    document.writeln(`Perulangan ke ${itung} <br>`);
    itung--;
    if (itung <= 0) {
        break;
    }
}

for (let i = 0; i <= 20; i++){
    if (i % 2 === 1) {
        continue;
    }
    document.writeln(`Nilai genap: ${i} <br>`);
}