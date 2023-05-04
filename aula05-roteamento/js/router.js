'use strict'


const routes = {
    '/': '/pages/home.html',
    '/vermelho': '/pages/vermelho.html',
    '/azul': '/pages/azul.html',
    '/rosa': '/pages/rosa.html',
    '/verde': '/pages/verde.html'
}
const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    console.log(html)
}




window.route = route