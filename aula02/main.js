'use strict'

const adicionar = document.getElementById('add')



// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML += '<div class = "items"><button>ok</button></div>'
// }  

const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    
    let status = " "

   
    
    if(nota >= 5){
        status = "aprovado"
    }else{
        status = "reprovado"}

    novaDiv.classList.add('aluno',status)
    novaDiv.innerHTML = `<h2 class="aluno__title">
                            ${aluno}
                        </h2>
                        <span class="nota__title">
                            ${nota}
                        </span>`        
    

    container.appendChild(novaDiv)

}
const handleClick = () => {

        nomeAluno: prompt('Digite um nome para o card:').trim()
        notaAluno: prompt('Digite uma nota para o card:').trim()

        console.log(notaAluno)

        if (notaAluno === '') {
            alert('ERRO: Não é possível prosseguir com o campo VAZIO')
        } else if (notaAluno == null) {
            alert('ERRO: Não é possível prosseguir com o campo VAZIO')
    
        } else if (isNaN(notaAluno)) {
            alert('ERRO: Não é possível prosseguir com valores não númericos')
        } else if (notaAluno < 0 || notaAluno > 10) {
            alert('ERRO: Digite uma nota de 0 a 10')
    
        } else {
            adicionarCard(nomeAluno, notaAluno)
        }

}




adicionar.addEventListener('click', handleClick)


//SOLID - Responsabilidade unica, função puras
