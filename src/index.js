import express, { Router } from 'express';

const app = express();
const HOST = '127.0.0.1';
const PORT = '3002';

// Controllers
const beeController = {
    // /bees/wing/102/dave, feiler uten alle parameter(102, dave)
    'params': (req, res) => {
        res.send(req.params);
    },
    // /bees/?smell=rose&age=34 
    'query': (req, res) => {
        res.send(req.query);
    }
}

// Routers
const beeRouter = Router();

beeRouter.get('/wing/:nr/:name', beeController['params']);
beeRouter.get('/sniff', beeController['query']);


//Mount routers
app.use('/bees', beeRouter)

//catch-all 404 handler
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
});

//Centralized Error Handler
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        //stack: err.stack
    });
});

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.error("------- FATAL ERROR -------");
        console.error(err);
        return -1;
    }

    console.log(`listening on ${HOST}:${PORT}`);
});
