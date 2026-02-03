import express from 'express'
// simple json response
const app = express();
app.get('/', (req, res) => {
    res.json([{
        name: 'John',

    }, {
        name: "susan"
    }])
})



app.listen(5000, ()=> {
    console.log('srver is listening on port 5000')
})
