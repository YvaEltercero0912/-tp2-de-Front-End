let numeros = []; // Definimos la variable numeros globalmente

function realizarOperacion(operacion) {
    switch (operacion) {
        case 'crear':
            crearArreglo();
            break;
        case 'suma':
            calcularSuma();
            break;
        case 'promedio':
            calcularPromedio();
            break;
        case 'maximo':
            encontrarMaximo();
            break;
        case 'minimo':
            encontrarMinimo();
            break;
        case 'eliminar':
            eliminarPrimerYUltimo();
            break;
        case 'agregar':
            agregarNuevoElemento();
            break;
        case 'ordenar':
            ordenarArreglo();
            break;
        case 'invertir':
            invertirArreglo();
            break;
        default:
            console.log('Operación no válida');
    }
}

// Función para generar un nuevo arreglo con 10 números aleatorios
function crearArreglo() {
    numeros = []; // Limpiamos el arreglo antes de crear uno nuevo
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    actualizarResultados(); // Actualizamos los resultados en la página web
}

// Función para calcular la suma de los números en el arreglo
function calcularSuma() {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    actualizarResultado('suma', suma); // Actualizamos el resultado de la suma en la página web
}

// Función para calcular el promedio de los números en el arreglo
function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    actualizarResultado('promedio', promedio); // Actualizamos el resultado del promedio en la página web
}

// Función para encontrar el valor máximo en el arreglo
function encontrarMaximo() {
    let maximo = Math.max(...numeros);
    actualizarResultado('maximo', maximo); // Actualizamos el resultado del máximo en la página web
}

// Función para encontrar el valor mínimo en el arreglo
function encontrarMinimo() {
    let minimo = Math.min(...numeros);
    actualizarResultado('minimo', minimo); // Actualizamos el resultado del mínimo en la página web
}

// Función para eliminar el primer y último elemento del arreglo
function eliminarPrimerYUltimo() {
    numeros.shift(); // Elimina el primer elemento
    numeros.pop(); // Elimina el último elemento
    actualizarResultados(); // Actualizamos los resultados en la página web
}

// Función para agregar un nuevo elemento aleatorio al arreglo
function agregarNuevoElemento() {
    let nuevoElemento = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    numeros.push(nuevoElemento); // Agrega el nuevo elemento al final del arreglo
    actualizarResultados(); // Actualizamos los resultados en la página web
}

// Función para ordenar el arreglo de forma ascendente
function ordenarArreglo() {
    numeros.sort((a, b) => a - b); // Ordena los elementos del arreglo de menor a mayor
    actualizarResultados(); // Actualizamos los resultados en la página web
}

// Función para invertir el orden de los elementos en el arreglo
function invertirArreglo() {
    numeros.reverse(); // Invierte el orden de los elementos en el arreglo
    actualizarResultados(); // Actualizamos los resultados en la página web
}

// Función para actualizar los resultados en la página web
function actualizarResultados() {
    document.getElementById('arreglo').textContent = '[' + numeros.join(', ') + ']'; // Muestra el arreglo como una cadena de texto
    calcularSuma(); // Recalcula la suma
    calcularPromedio(); // Recalcula el promedio
    encontrarMaximo(); // Recalcula el máximo
    encontrarMinimo(); // Recalcula el mínimo
}

// Función para actualizar un resultado específico en la página web
function actualizarResultado(id, valor) {
    document.getElementById(id).textContent = valor; // Actualiza el contenido del elemento con el ID especificado
}