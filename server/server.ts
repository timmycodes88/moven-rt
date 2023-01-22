const Express = require("express")
const App = Express()

App.get('/', (req, res) => {
    res.send('Hello World')
})

App.listen('8080', () => console.log('Server has been Served'))