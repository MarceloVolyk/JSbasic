const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//escutando o evento (precisa vir antes da emissão)
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id} `)
})

customEmitter.on('response', () => {
    console.log(`some other logic `)
})

//emitindo o evento(precisa vir depois da "escutação")
customEmitter.emit('response', 'john', 34)