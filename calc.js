const chalk = require('chalk')
const yargs = require('yargs')
const boxen = require('boxen')

process.stdin.on("data", data =>{
    data = data.toString().replace(/\r?\n/g, "")
    ev = eval(data)

console.log(chalk.blue(boxen(`${data} = ${ev}`, {title: 'calculator', 
titleAlignment: 'center', textAlignment: 'center',backgroundColor: 'white'})))
});


