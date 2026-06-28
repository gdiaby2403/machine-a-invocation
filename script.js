const form = document.querySelector("#invocation")
const prenom = document.querySelector("#prenom").value
const creature = document.querySelector("#creature").value 
const message = document.querySelector("#message")



form.addEventListener('click', () => {
    event.preventDefault()
    message.textContent = `${prenom} a invoqué ${creature} pour la suivre dans son aventure`
    const formCache = document.querySelector("#invocation").classList.add('cache')
    const resultat = document.querySelector("#resultat").classList.remove('cache')
    console.log('clic')
})

