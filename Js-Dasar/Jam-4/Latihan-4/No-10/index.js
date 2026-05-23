let role = prompt("Masukkan role Anda (admin/user/guest): ") ?? "guest";
console.log(`Role yang dimasukkan: ${role}`);
switch (role.toLowerCase()) {
    case "admin":
        console.log("Full Access");
        break;
    case "user":
        console.log("Limited Access");
        break;
    case "guest":
        console.log("No Access");
        break;
    default:
        console.log("Role tidak valid");
}

let cekRole = typeof role === "string" ? "Valid" : "Tidak Valid";
console.log(`Status role: ${cekRole}`);
