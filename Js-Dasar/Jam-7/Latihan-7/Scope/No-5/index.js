function luar() {
    let a = 10;

    function dalam() {
        document.writeln(a);
        let b = 20;
        document.writeln(b);
    }

    dalam();
}

luar();