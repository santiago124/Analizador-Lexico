const textArea = document.getElementById('texto')

let palabras

const iniciar = () => {
    palabras = textArea.value.split(' ')

    console.log(palabras)
}
