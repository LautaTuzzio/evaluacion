function calculate(value) {
    const result = document.getElementById('result')

    try {
        if (value === 'clear') {
            result.value = '' // Limpia el valor del input
        } else if (value === 'calculate') {
            // Almacenar el calculo completo para mostrar
            if (result.value.trim() === '') {
                result.value = 'Error'
                return
            }

            // Reemplazar ^ por ** para eval
            let expr = result.value.replace(/\^/g, '**')
            // Usar Function constructor para evaluacion segura
            const safeEval = new Function('return ' + expr)
            result.value = safeEval()
        } else if (value === '%') {
            result.value = eval(result.value + '/100')
        } else if (value === 'Math.sqrt(') {
            result.value = 'Math.sqrt(' + result.value + ')'
        } else if (value === '**2') {
            result.value = eval(result.value + '**2')
        } else if (value === 'Math.sin(') {
            result.value = 'Math.sin(' + result.value + ')'
        } else if (value === 'Math.cos(') {
            result.value = 'Math.cos(' + result.value + ')'
        } else if (value === 'Math.tan(') {
            result.value = 'Math.tan(' + result.value + ')'
        } else if (value === 'Math.log(') {
            result.value = 'Math.log(' + result.value + ')'
        } else if (value === 'Math.pow(' || value === '^') {
            result.value += '^';
        } else if (value === '**') {
            result.value += '**'
        } else {
            // Si el ultimo carácter es '(', y el valor es un numero, agregamos el numero y cerramos el parentesis
            if (result.value.slice(-1) === '(' && !isNaN(value)) {
                result.value += value + ')';
            } else {
                result.value += value; // Agregar el valor del boton al input
            }
        }
    } catch (error) {
        console.error('Error de calculo:', error)
        result.value = 'Error' // Manejar errores en la evaluacion
    }
}
