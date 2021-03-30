const pubsub = {
    events: {},
    on(eventName, handler) {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(handler)
    },
    off(eventName, handler) {
        if(this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(fn => fn !== handler)
        }
    },
    emit(eventName, data){
        if( this.events[eventName]) {
            this.events[eventName].forEach(fn => {
                fn(data)
            })
        }
    }
}

export default pubsub