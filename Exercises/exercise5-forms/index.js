'use strict'

const form = document.getElementById('form')
const urlValidation = document.getElementById('url_validation')
const emailValidation = document.getElementById('email_validation')

const urlRegEx = /https?:\/\/[\w]*\.[\w]*[\.|\/]?[\w]*[\.|\/]?[\w|\/-]*/
const emailRegEx = /^[\w.]+@[\w]+\.{1}[\w]+(\.{1}[\w]+)*$/

const validation = () => {
    const url = form.url.value
    const email = form.email.value

    if (urlRegEx.test(url)) {
        urlValidation.innerText = 'Es valido👍'
        urlValidation.style.color = 'green'
        
        setTimeout(() => {
            urlValidation.innerText = ''
        }, 2000)
    } else {
        urlValidation.innerText = 'No es válido'
    }

    if (emailRegEx.test(email)) {
        emailValidation.innerText = 'Es válido👍'
        form.email.className = 'success'
        emailValidation.style.color = 'green'

        setTimeout(() => {
            emailValidation.innerText = ''
        }, 2000)
    } else {
        emailValidation.innerText = 'No es valido'
        form.email.className = 'error'
    }
}

form.url.oninput = validation
form.email.oninput = validation

form.onsubmit = (event) => {
    event.preventDefault()
    const {
        url: { value: url },
        email: { value: email }
    } = event.target

    if (urlRegEx.test(url)) {
        urlValidation.innerText = 'Es válido👍'
        urlValidation.style.color = 'green'
    } else {
        urlValidation.innerText = 'No es válido'
    }

    if (emailRegEx.test(email)) {
        emailValidation.innerText = 'Es válido'
    } else {
        emailValidation.innerText = 'No es valido'
    }
} 