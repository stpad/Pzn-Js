let data = "1";
if (typeof data === "number") {
    console.log("Data ini adalah Number");
} else if (typeof data === "string") {
    console.log("Data ini adalah String");
} else if (typeof data === "boolean") {
    console.log("Data ini adalah Boolean");
} else if (typeof data === "undefined") {
    console.log("Data ini adalah Undefined");
}
else {
    console.log("Data ini adalah Object");
}

// let data2 = prompt("Masukkan data apa aja: ");
// document.write(typeof data2); 