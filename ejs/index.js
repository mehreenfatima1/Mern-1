
import express from 'express'
const app = express();
const port = 8000;
app.use(express.static('assests/images'))
app.set("view engine","ejs");

app.get('/index',function(req,res){
   
    res.render('pages/index');
})
app.get('/about',function(req,res){
    res.render('pages/about')
})
app.get('/products',function(req,res){
    res.render('pages/productsservices')
})
app.listen(port)