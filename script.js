const form = document.querySelector('form')
const loginButton = document.querySelector('#login')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')

loginButton.addEventListener('click', event => {
    event.preventDefault()
    const fields = [...document.querySelectorAll('.input-box')]
    fields.forEach(field => {
        if (field.value == '') {
            form.classList.add('validate-error')
        } 

        const formError = document.querySelector('.validate-error')
        if (formError) {
            formError.addEventListener('animationend', event => {
                if (event.animationName == 'noLogin') {
                    formError.classList.remove('validate-error')
                }
            })
        } else {
            form.classList.add('fadeOut')
        }
    })
    
})

form.addEventListener('animationstart', event => {
    if (event.animationName == 'fadeOut') {
        body.style.overflow = 'hidden'
        h1.classList.add('outTitle')
    }
})

form.addEventListener('animationend', event => {
    if (event.animationName == 'fadeOut') {
        form.style.display = 'none'
        body.style.overflow = 'none'
    }
})