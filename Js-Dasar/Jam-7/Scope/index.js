function a() {
    let a = 1;
    // console.log(a);

    function aDalam() {
        let c = 3;
        let jumlah = a + c;
        console.log(jumlah);
    }
    
    aDalam();
    console.log(jumlah); // error karena jumlah hanya bisa diakses di dalam function aDalam

}

function b() {
    let b = 2;
}

a();
b();