const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

function checkPalindromeAndCharCount(palavra)
{
    var i = 0
    var j = palavra.length - 1
    var isPalindrome = true
    var charCount = {}
    do {
        if (palavra[i] != palavra[j]) {
            isPalindrome = false;
        }
        if (undefined === charCount[palavra[i]]) {
            charCount[palavra[i]] = 1
        } else {
            charCount[palavra[i]]++
        }
        if (undefined === charCount[palavra[j]]) {
            charCount[palavra[j]] = 1
        } else {
            charCount[palavra[j]]++
        }
        i++
        j--
    } while (i < j)

    if (i == j) {
        if (undefined === charCount[palavra[i]]) {
            charCount[palavra[i]] = 1
        } else {
            charCount[palavra[i]]++
        }
    }
    return {palindromo: isPalindrome, ocorrencias_caracteres: charCount}
}

app.post('/', (req, res) => {
    res.send(checkPalindromeAndCharCount(req.body.texto))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})