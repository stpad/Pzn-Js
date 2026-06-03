function total(...angka) {
    let total = 0
    for (let i of angka) {
        total += i;
    }
    document.writeln(`Total: ${total}`);
}

total (10, 20, 30);