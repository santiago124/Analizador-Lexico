const library = {
    'for': 'Es una palabra reservada para un bucle',
    '(': 'Parentisis de apertura',
    ')': 'Parentisis de cierre',
    '+': 'Operador de suma',
    '++': 'Incrementador en 1',
    '{': 'Llave de apertura',
    '}': 'Llave de cierre',
    '=': 'Operador de asignación',
    ';': 'Delimitador',
    '<': 'Menor que',
    '>': 'Mayor que',
}


const analyzer = () => {
    const textArea = document.getElementById('texto').value.trim()
    var temp = ''

    for (let index = 0; index < textArea.length; index++) {
        if (textArea[index] == ' ') {
            temp = ''
            continue
        }

        temp += textArea[index]

        if (library[temp] != undefined) {
            console.log(library[temp])
            temp = ''
        } else {
            continue
        }

    }

    console.log(temp)
}




/*
for(i = 0; i < 10; i++){
}
*/