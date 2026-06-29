import express, { Router json } from 'express';

const beeController = {
    'getId': (req, res) => {
        res.send(req.id)
    }
}
