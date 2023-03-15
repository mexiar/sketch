let celdas = 16;
crearCaja (celdas);

function crearCaja (celdas) {
    const container = document.querySelector("#container");

    let filas = 0;
    let cont = 0;

    while (filas < celdas) {
        cont++;
        let divFila = document.createElement("div");
        divFila.classList.add("fila");
        container.appendChild(divFila);
    
        filas++;
        let columnas = 0;
    
        while (columnas < celdas) {
            let divColumna = document.createElement("div");
            divColumna.classList.add("columna");
            divFila.appendChild(divColumna);
            columnas++;
        }
    }
    
    const cajas = document.querySelectorAll('.columna');
    
    cajas.forEach((caja) => {
        caja.addEventListener('mouseover', () => {
            caja.classList.add("hover");
        });
    });
}

function borrarCaja () {
    let cajas = document.querySelectorAll('.fila');
    
    cajas.forEach((caja) => {
        caja.remove();
    });
}

const boton = document.querySelector("#boton");
boton.addEventListener('click', () => {
    celdas = prompt("¿Cuántas celdas quieres?");
    if (celdas < 100) {
        borrarCaja();
        crearCaja(celdas);
    }
})