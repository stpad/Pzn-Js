function total(...angka) {
    let total = 0
    for (let i of angka) {
        total += i;
    }
    return total;
}

document.writeln(`Total: ${total(10, 20, 30)}`);