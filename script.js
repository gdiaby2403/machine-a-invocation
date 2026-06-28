const form = document.querySelector("#invocation")
const prenom = document.querySelector("#prenom").value
const btnRecommencer = document.querySelector("#recommencer").value




form.addEventListener('click', () => {
    event.preventDefault()
    const creature = document.querySelector("#creature").value 
    const message = document.querySelector("#message")
    const form = document.querySelector("#invocation").classList.add('cache')
    const resultat = document.querySelector("#resultat").classList.remove('cache')
    message.textContent = `${prenom} a invoqué ${creature} pour la suivre dans son aventure`
    console.log('clic')
})

btnRecommencer.addEventListener('click', () =>{
    event.preventDefault()


})
