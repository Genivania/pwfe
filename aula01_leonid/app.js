'use strict'

const calcular = document.getElementById('calcular')


function somar(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const situacao = document.getElementById('situacao')
    const formulario = document.getElementById('form')
   

    if( situacao.value = (nota1 + nota2)/2 >= 5){
        situacao.value = 'APROVADO'
        formulario.classList.add('aprovado')
        formulario.classList.remove('reprovado')
    }else{
        situacao.value = 'REPROVADO'
        formulario.classList.add('reprovado')
        formulario.classList.remove('aprovado')
    }
    
}

calcular.addEventListener('click', somar)




