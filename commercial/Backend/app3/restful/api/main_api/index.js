const main_api_router = require('express').Router()
const controller = require('./../../api_controller/main_controller/index')

main_api_router.get('/', (req, res) => {
    // answer via controller
    res.json({
        answer: 'main api is working'
    })
})

main_api_router.get('/grid1', (req, res) => {
    // answer via controller
    res.json({
        answer: 'this is main grid answer'
    })
})

main_api_router.get('/products', (req, res) => {
    // answer via controller
    res.json({
        answer: 'this is products data answer'
    })
})

main_api_router.get('/grid2', (req, res) => {
    // answer via controller
    res.json({
        answer: 'this is second grid answer'
    })
})

module.exports = main_api_router 
