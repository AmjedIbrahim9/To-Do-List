const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + "/date.js")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
const ToDo = [];
const workList = [];

app.get('/', function(req, res){
    const day = date.getDate();
    const time = date.getTime();
    res.render("list", {listTitle: day, time: time, ToDo: ToDo});
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", ToDo: workList});
});

app.get("/landing", function(req, res){
    res.render("landing")
})


app.post("/", function(req, res){
    const anotherToDo = req.body.todoItem;
    const anotherWork = req.body.todoItem;

    if (req.body.list === "Work"){
        workList.push(anotherWork);
        res.redirect("/work");
    } else {
        ToDo.push(anotherToDo);
        res.redirect("/");
    }


    
});

app.listen(3000, function() {
console.log('server started on port 3000');
});