import express from 'express';
import { products, people } from './data.js';

const app = express();
// sending a simple json to user
// app.get('/', (req, res) => {
//     res.json(products);
// });
    // 1. Create a Global Style string
const pageStyles = `
<style>
  body { font-family: sans-serif; background: #f4f4f4; padding: 20px; }
  .container { 
    background: white; 
    margin-bottom: 20px; 
    padding: 15px; 
    border-radius: 8px; 
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    max-width: 400px;
  }
  .product-name { color: #222; text-transform: capitalize; }
  img { width: 100%; border-radius: 4px; display: block; }
</style>
`;
const ProductStyle = (name, imageUrl) => {
        const styleHolder =
    
       `<div class="container">

     
        <h2 class="product-name">${name}</h2>
        <img src=${imageUrl}/>
        </div>
        `
        return styleHolder
          

    };

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products<a/>');

});
app.get('/api/products', (req, res)=> {

        const productHtml = products.map(el=> {
            return ProductStyle(el.name, el.image)
        }).join("")
    res.send(productHtml + pageStyles)
});
app.get('/api/products/:productID', (req, res) => {
    const {productID } = req.params
    
    const singleProduct = products.find(product => product.id === Number(productID));
    singleProduct ?  res.send(singleProduct) : res.status(404).send('<h1>Product does not exist</h1>')
   
})
// using query strings
app.get('/api/v1/query', (req, res)=> {
  let productsCopy = [...products];

  const {search, limit} = req.query
  if(search){
    productsCopy = productsCopy.filter(product => (
        product.name.startsWith(search)
    ))
  };
  if (limit){
    productsCopy= productsCopy.slice(0, Number(limit))
  };
  if(!productsCopy.length) res.end('No Products match your search')
  res.status(200).send(productsCopy)  

})
 

app.listen(5000, ()=> {
    console.log('Server startew listening for an incoming request')
});
