import express from 'express';
import { logger } from './logger.js';
import { authorise } from "./authorise.js";
import morgan from 'morgan';
const app = express();
// app.use(logger, authorise)
app.use(morgan('dev'))
app.get('/', (req, res) => {
   
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About');
});
// applying more than one middlewre to a request
app.get('/api/items', (req, res) => {
    res.send('Items page')
})
app.listen(5000, ()=> {
    console.log('Server started listening for an incoming request')
})