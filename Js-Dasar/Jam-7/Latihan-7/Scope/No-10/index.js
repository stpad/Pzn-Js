let a = 1;
function pertama() {
    let b = 2;
    function kedua() {
        let c = 3;
        if(true){
            let d = 4;  
            document.writeln(`a: ${a} <br>`);
            document.writeln(`b: ${b} <br>`);
            document.writeln(`c: ${c} <br>`);
            document.writeln(`d: ${d} <br>`);
        }

        document.writeln(`d: ${d} <br>`);
    }

    kedua();
}
pertama();