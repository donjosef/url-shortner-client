import pubsub from './pubsub.js'

const shortUrlContainer = document.querySelector('.short-url')

const displayError = (error) => {
    shortUrlContainer.textContent = error
    shortUrlContainer.style.color = 'red'
}

pubsub.on('urlError', displayError)