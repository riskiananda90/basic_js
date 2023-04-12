var products = ["Senter", "Radio", "Antena", "Obeng"];


document.write("<h3>Daftar Produk:</h3>");
document.write("<ol>");

// menggunakan perulangan untuk mencetak semua isi array
for(let i = 0; i < products.length; i++){
    document.write(`<li>${ products[i] }</li>`);
}

document.write("</ol>");
