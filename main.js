document.addEventListener("DOMContentLoaded", () => {
    const verProductos = document.getElementById("verProductos");
    const productosSection = document.getElementById("productos");

    verProductos.addEventListener("click", () => {
        productosSection.scrollIntoView({ behavior: "smooth" });
    });

    const botonesCompra = document.querySelectorAll(".btn-comprar");

    botonesCompra.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("Producto agregado al carrito.");
        });
    });
});
