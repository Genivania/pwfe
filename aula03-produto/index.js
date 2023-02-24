'use strict'

import{produtos} from "./produtos.js"
  
const criarCard = (produto) => {
    //console.log (produto.name)
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./img/${produto.image}`


    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produto.name

    const descricao =  document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const valor =  document.createElement('span')
    valor.classList.add('card__price')
    valor.textContent = produto.price

    card.append(img, titulo, descricao, valor)

    return card

}

const carregarProdutos = () =>{
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos( )


















//const precos = [10, 23, 51, 90, 1000, 26]

// const limite = precos.length
// const precosFrete = []
// for (let i=0; i<limite;i++){
//     precosFrete[i] = precos[i] + 2
// }

// const limite = precos.length
// const precosFrete = []
// let i = 0
// while (i < limite) {
//     precosFrete[i] = precos[i] + 2
//     i++
// }

// const adicionaFrete = (preco) => preco + 2
// const precosFrete = precos.map(adicionaFrete)


// console.log (precosFrete)