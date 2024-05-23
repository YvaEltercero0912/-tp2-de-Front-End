function validateAndCalculate() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const studentId = document.getElementById('studentId').value;
    const email = document.getElementById('email').value;
    const grades = []; // Array para almacenar las notas.
    let errorMessages = ''; // Inicialización de una cadena para mensajes de error.

        
    // Bucle para validar y recoger las notas de las 5 materias.

    for (let i = 1; i <= 5; i++) {
        const subject = document.getElementById('subject' + i).value;
        const grade = parseFloat(document.getElementById('grade' + i).value);
        // Verificar si los campos de materia y nota están completos y correctos.
        if (!subject || isNaN(grade)) {
            errorMessages += `Todos los campos son obligatorios y deben ser válidos.\n`;
            break;
        }
        grades.push(grade); // Agregar la nota al array de notas.
    }
    
    // Verificación de campos personales llenos.
    if (!firstName || !lastName || !studentId || !email) {
        errorMessages += 'Todos los campos personales son obligatorios.\n';
    }
    
    // Validación del formato del correo electrónico.
    if (!validateEmail(email)) {
        errorMessages += 'El formato del correo electrónico no es válido.\n';
    }
        // Mostrar errores o calcular el promedio si todo está correcto.

    if (errorMessages) {
        document.getElementById('errorMessages').innerText = errorMessages;
    } else {
                // Calcular el promedio de las notas.

        const average = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
        document.getElementById('averageResult').innerText = average.toFixed(2);
        document.getElementById('errorMessages').innerText = '';
    }
}

function validateEmail(email) {
        // Expresión regular para validar el correo electrónico.

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
