import fs from 'fs'

fs.appendFile('my-file.txt', 'file created by Node.js', (err)=> {
    if (err) throw err
    console.log('File saved!')
})

setTimeout(() => console.log('End!'), 40000)