
const express= require('express');
const path= require('path');
const port= 7428;


const db = require('./mongoose/mongoose');
const todo = require('./models/todo');
const { create } = require('./models/todo');


const app= express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var Todo = [
    {
        description: "AYUSH DUBEY",
        category: "personal",
        date: "21 Aug"


    }
    
]


// app.get('/', function (req, res) {
//     Contact.find({}, function (err, contacts) {
//         if (err) {
//             console.log('error in fetching contacts from db');
//             return;
//         }
//     )}
    
    

//         return res.render('home', {
//             title: "TODO List"
            
//         });

//     });

    app.get('/', function (req, res) {

        todo.find({}, function (err, todos) {
            if (err) {
                console.log('error in fetching contacts from db');
                return;
            }
    
            return res.render('home', {
                title: "To do List"
                , Todo: todos
            });
    
        });
    
    });


    app.post('/create-todo', function (req, res) {
        // contactList.push({
        //     name: req.body.name,
        //     number: req.body.number
        // });
        // return res.redirect('/');
        todo.create({
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        },
    
            function (err, newtodo) {
                if (err) {
                    console.log('error in creating a todo works!!');
                    return;
    
                }
    
                console.log('********', newtodo);
                return res.redirect('back');
    
            }
        );

    });


    app.get('/delete-todo', function (req, res) {
        // get query from url 
        //console.log(req.query);
    
    
    
        //get the id from query of the ul
        let id = req.query.id;
        
        //find the contact in database using id and delete
        Contact.findByIdAndDelete(id, function(err){
            if(err){
                console.log('error in deleting contact from database');
                return; 
            }
            return res.redirect('back');
        });
    });
    // app.get("/delete-todo", function(req, res) {
    //     const checkedItemId = req.body.checkbox;
    //     item.findByIdAndRemove(checkedItemId , function(err) {
    //       if (!err) {
    //         console.log("Successfully deletd the Id");
    //       }
    //       res.redirect("/");
    //     });
    //   });


app.listen(port, function(err){
if(err){
    console.log(`error occured: ${err}`);
}
console.log(`server running sucessfully: ${port}`);
});