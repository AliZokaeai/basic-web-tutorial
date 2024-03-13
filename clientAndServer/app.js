const express = require('express');
//express app
const app = express();
//register  view engine

app.set('view engine', 'ejs');
// app.set('views','myviews');

//listen for request
app.listen(3000);



app.get('/',(req,res)=>{
    //res.send('<h> home page </h>');
    //res.sendFile('./views/index.html',{root: __dirname});
    //res.render('index',{title:'Home'});
    const  blogs =[
        {title:'Yoshi finds eggs', snippet:'lorem ipsum lorem ipsum lorem'},
        {title:'Mario finds eggs', snippet:'lorem ipsum lorem ipsum lorem'},
        {title:'How to defeat bowser', snippet:'lorem ipsum lorem ipsum lorem'}

    ];
    res.render('index',{title:'Home',blogs});
});

app.get('/about',(req,res)=>{
    //res.send('<h1> about page </h1>');
    //res.sendFile('./views/about.html',{root: __dirname});
    res.render('about',{title:'About'})
});

//redirect
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'});
})
//404 page
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404.html',{root: __dirname});
    res.status(404).render('404',{title:'404'})
});

//https://youtu.be/yXEesONd_54?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=6