var express = require('express');
var hbs= require('hbs');
var path=require('path');// pull from server
var bodyParser=require('body-parser');

//user model
var usersController= require('./controllers/users');
var app=express(); //create server

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {extended: false}
));


app.use(express.static('public'));
//routes

app.get('/', function(request,response){
response.render('index', {title: "Home", users:usersController.getUsers})   // sends data
});

app.get('/users/:id', function(request,response){
    var user= usersController.getUser(request.params.id)
response.render('profile', {title: "User Profile ", user:user}) //attribue: value  
});

app.get('/login', function(request,response){
    
    response.render('login', {title: "Login "});
//response.sendfile('./views/login.html');    
});
app.get('/signup', function(request,response){
    response.render('signup', {title: "SignUp "});
//response.sendfile('./views/signup.html');  //sends the whole file doesnt send data  
                   });
app.get('/about', function(request,response){
    response.render('about', {title: "About Us "});
//response.sendfile('./views/about.html');   
});
 
app.post('/login', usersController.postLogin);
app.listen(3000);