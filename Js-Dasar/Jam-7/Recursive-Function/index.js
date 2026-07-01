function recursive(value){
    let hasil = 1;
    for (let i = 1; i <= value; i++) {
        hasil *= i;
        document.writeln(`Hasil faktorial dari ${i} adalah ${hasil} <br>`);
    }
}

recursive(5);


function recursiveFunction(value){
    if(value === 0){
        return 1;
    }
    return value * recursiveFunction(value - 1);
}

document.writeln(`Hasil faktorial dari 5 adalah ${recursiveFunction(5)} <br>`);