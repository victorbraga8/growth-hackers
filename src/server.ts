import express from 'express'
import { Router, Request, Response } from 'express';
import { router } from './routes';

const app = express();
app.use(router);
app.use(express.json());

app.listen(3333, () => 'server running on port 3333')