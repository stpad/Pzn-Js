i:
for(let i = 1; i <= 3; i++) {
    j:
    for(let j = 1; j <= 5; j++) {
        if(i === 2 && j === 3) {
            break i;
        }
        document.write(`i = ${i}, j = ${j} <br>`);
    }
}