import express, { Router } from 'express';

const app = express();
const HOST = '127.0.0.1';
const PORT = '3002';

const beeController = {
    'getId': (req, res) => {
        res.send(req.params.wingNr);
    }
}

const beeRouter = Router();

beeRouter.get('/:wingNr', beeController['getId']);

app.use('/bees', beeRouter)

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.error("------- FATAL ERROR -------");
        console.error(err);
        return -1;
    }

    console.log(`listening on ${HOST}:${PORT}`);
});
