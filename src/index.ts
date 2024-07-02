import express, { Request, Response } from 'express';
import { homeRouter } from './routes/homeRoute';
import engine from 'express-edge';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const app : express.Express = express();
const port: number = 3000;

app.use(engine);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'edge');
//app.enable('view cache');
app.use(homeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
