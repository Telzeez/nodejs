import express from 'express';
import morgan from 'morgan';
import { people } from '../tutorial2/data';

const app = express();


//get method
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
});

// post method
app.listen(5000, ()=> {
    console.log('server started listening for an incomming request')
})