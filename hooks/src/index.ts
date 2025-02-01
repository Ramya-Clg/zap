import express from 'express'
const app = express()


app.post('/hooks/catch/:userId/:zapId', (req, res) => {
    const userId = req.params.userId
    const zapId = req.params.zapId
    res.send('Hello World!')
});


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});