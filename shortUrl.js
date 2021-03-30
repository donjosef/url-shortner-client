import pubsub from './pubsub.js'

const shortUrlContainer = document.querySelector('.short-url')

const displayUrl = (url) => {
    shortUrlContainer.innerHTML = ""

    const link = document.createElement('a')
    link.href = 'https://shortdaurl.herokuapp.com/' + url.urlCode
    link.textContent = url.shortUrl
    link.target = '_blank'
    shortUrlContainer.appendChild(link)
}

pubsub.on('urlCreated', displayUrl)