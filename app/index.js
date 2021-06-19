const express = require('express');
const app = express();
const port = 3001;

let languages = {
    NL: 'Hallo Wereld',
    HI: 'नमस्ते दुनिया',
    FR: 'Bonjour le monde',
    ES: 'Hola Mundo',
    IT: 'Ciao Mondo',
    CH: '你好，世界',
    JP: 'こんにちは世界',
    AR: 'مرحبا بالعالم',
    EN: 'Hello world',
}

app.get ('/:language', (req, res) => {
    let lang = req.params.language
    if (lang in languages) {
        res.send(languages[lang])
    } else {
        res.send(languages.EN)
    }
})


// add a language
app.get('/add/:language/:phrase', (req, res) => {
    let {language, phrase} = req.params
    if (language in languages) {
        res.send(`${language} already exists.`)
    } else {
        languages[language] = phrase
        res.send(`${language} added with the phrase ${phrase}.`)
    }
})


// remove a language
app.get('/remove/:language', (req, res) => {
    let {language} = req.params
    if (language in languages) {
        delete languages[language]
        res.send(`${language} has been removed.`)
    } else {
        res.send(`${language} does not exist.`)
    }
})

// update a language
app.get('/update/:language/:updatedlang', (req, res) => {
    let {language, updatedlang} = req.params
    if (language in languages) {
        languages[language] = updatedlang
        res.send(`${language} updated to ${updatedlang}.`)
    } else {
        res.send(`${language} does not exist`)
    }
})

app.listen(3001, () => {
    console.log('Your server is running ', port)
})