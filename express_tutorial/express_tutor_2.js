import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// recreate dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
// methods we can use in this giant app object
// app.get();
// app.post();
// app.put();
// app.delete();
// app.all();
// app.use();
// app.listen();
// app.route();

// set up static and middle ware
app.use(express.static('../navbar_app/public'))
app.get('/', (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, '../navbar_app/index.html'))
});

app.get('/about', (req, res) =>{
    res.status(200).send('<h1>AboutPage</h1>'  )
});

// The (.*) acts as a named parameter that matches anything
// This tells Express 5 to catch everything and name the parameter "splat"
app.all('/*splat', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});


app.listen(5001, ()=> {
    console.log('server started listening for an incoming request')
});