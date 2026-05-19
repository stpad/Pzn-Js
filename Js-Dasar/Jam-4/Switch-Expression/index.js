let nilai = prompt('Masukkin nilai tong (1-100)');
switch (true) {
    case nilai >= 90:
        alert(`Mamah kamu bangga karena dapet nilai ${nilai}`);
        break;
    case nilai >= 70:
        alert(`Mamah kamu lumayan bangga karena dapet nilai ${nilai}`);
        break;
    case nilai >= 50:
        alert(`dongok banget luwh dapet nilai ${nilai}`);
        break;
    default:
        alert(`Drop Out lu malu2in mamah kamu karena dapet nilai ${nilai}`);
}