import pubsub from './pubsub.js'

const form = document.querySelector('form')
const urlInput = form.longurl

const createShortUrl = async (e) => {
    e.preventDefault()
    const urlValue = urlInput.value

    try {
        const res = await fetch('http://localhost:4000/api/url/shorten', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                longUrl: urlValue
            })
        })

        const url = await res.json()
        if(url.error) {
            const { error } = url
            throw error
        } else {
            pubsub.emit('urlCreated', url)
        }
    } catch (err) {
        console.log(err)
        pubsub.emit('urlError', err)
    }
}

form.addEventListener('submit', createShortUrl)

