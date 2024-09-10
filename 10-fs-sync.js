const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//equivale a:
//const fs = require('fs')
//fs.readFileSync

console.log(first, second)   //imprime o conteúdo dos arquivos no cosole

writeFileSync(                                  //cria um arquivo nesse caminho com essa msg
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }                                 //flag 'a' adiciona esse texo ao existente, ao invés de somente sobrescrever
)