let carrito = [];

function agregar(nombre, precio) {

    let existente = carrito.find(item => item.nombre === nombre);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    renderCarrito();
}

function renderCarrito() {

    let contenedor = document.getElementById("items-carrito");
    let total = 0;
    let totalCantidad = 0;

    contenedor.innerHTML = "";

    carrito.forEach((item) => {

        let subtotal = item.precio * item.cantidad;

        total += subtotal;
        totalCantidad += item.cantidad;

        contenedor.innerHTML += `
            <div class="item-carrito">
                <p>${item.nombre} x${item.cantidad}</p>
                <p>$${subtotal}</p>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("cantidad").innerText = totalCantidad;
}

function vaciarCarrito() {
    carrito = [];
    renderCarrito();
}