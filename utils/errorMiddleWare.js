

// refactor handdle error that built in express  
globalError = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'


        sendError(err, res)
   

}

const sendError = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status, // 400 or 500 ... 

        message: err.message,


    })
}

module.exports = globalError

