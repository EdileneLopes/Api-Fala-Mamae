const app = require('./src/app')
const dotenv = require("dotenv")

dotenv.config()
const PORT = process.env.PORT || 5758


app.listen(PORT, () => {
    console.log(`O APP Está rodando em http://localhost: ${PORT}`)
})

module.exports = app