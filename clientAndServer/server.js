const http = require('http');
const fs = require('fs');
const _= require('lodash');

const server = http.createServer((req, res)=>{
   //console.log(req.url, req.method);

   //lodash

   const num = _.random(0,20);
   console.log(num) ;

   const greet = _.once(()=>{
    console.log('hello')
   });

   greet();
    // set header content typ
    res.setHeader('Content-type','text/html');

    let path ="./views/";
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path +='about.html';
            res.statusCode = 200;
            break;
        case '/about-blah':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path +='404.html';
            res.statusCode = 404;
            break;
    }
    //send an html file
    // fs.readFile('./views/index.html',(err, data)=>{
    fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
    });
});


server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000')
})



   // res.write('<head><link rel="stylesheet" href="style.css"></head>');
    // res.write('<h2>Hello, ALi Zokaei</h2>');
    // res.write('<p>You are the best JavaScript programmer in ever</p>');
    // res.end();