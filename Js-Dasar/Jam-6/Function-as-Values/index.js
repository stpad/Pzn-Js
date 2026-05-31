function halo(nama){
    console.log(`Halo ${nama}`);
}

let sapa = halo;
sapa("Sutan Gosling");
sapa("Ryan Gosling");

function teman (teman){
    teman ("Jamal");
    teman ("Dani");
}

teman (halo);
teman (sapa);