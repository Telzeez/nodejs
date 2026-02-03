import express from 'express';
import morgan  from 'morgan';
import path from 'path'
import {people} from '../tutorial2/data.js'
const app = express()

// parse form data using url encoding
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('./methods-public'));
app.get('/api/people', (req, res) => {
    res.status(200).json(({success: true, data: people}))
});
app.post('/api/people', (req, res)=>{

    const { name } = req.body

    if(!name){
       return res.status(400).json(({success: false, msg: 'please provide name value'}));

    }
    //update the new name to local dqata array
    const newPerson = {id: Date.now(), name: name}
    people.push(newPerson)
    res.status(201).send({success: true, person: name})

})

app.post('/login', (req, res)=> {
    console.log(req.body);
    const {name} = req.body
    console.log(name)
    if(name){ 
     return res.status(200).send(`Welcome ${name}`)}
    res.status(401).send('Please provide credentials')
})

app.listen(5000, ()=> {
    console.log('server listenening for an incoming request on port 5000')
});
