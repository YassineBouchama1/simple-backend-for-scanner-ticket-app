const express = require('express')
const cors = require("cors");
const dbConnect = require('./configDB');
const ApiError = require('./utils/ApiError');
const globalError = require('./utils/errorMiddleWare')

const { getTickets, createTicket, showTicket, deleteTicket,updateTicket } = require('./controllers/ticket');
const app = express()
const port = 3000


app.use(express.json())
app.use(cors());


dbConnect()
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/tickets',getTickets)
app.get('/ticket',showTicket)
app.delete('/deleteTicket',deleteTicket)
app.post('/createTicket',createTicket)
app.patch('/updateTicket',updateTicket)





//@Desc : Handle Error if User Request Url Not Found
app.all('*', (req, res, next) => {
    next(new ApiError(`cant find this url  ${req.originalUrl}`, 400))
})

app.use(globalError)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})