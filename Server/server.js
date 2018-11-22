var express = require('express');


const path = require('path');
const publicPath = path.join(__dirname,'../Public');

console.log(__dirname+'./../Public');
console.log(publicPath);

var app = express();
app.use(express.static(publicPath));


app.get('/',(req,res)=>{
    
});

app.listen(3000,()=>{
    console.log('The Server has Started');
});