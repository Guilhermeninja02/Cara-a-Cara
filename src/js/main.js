function esconderImagem(pessoa){
    const imagem = document.querySelector(`#${pessoa}`)
    if (imagem.classList.contains('escondido')){
        imagem.classList.remove('escondido')
    }else{
        imagem.classList.add('escondido')
    }
}

var contador = 0

function escolherPersonagem(pessoa){
    if (contador == 0){
        const imagem = document.querySelector(`#${pessoa}`)
        imagem.classList.add('escolhida')
        contador++
    }
}