const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('view', './view');
app.use(bodyParser.urlencoded({extended: true}));


const list = [
  {todo: "whatever", yetTodo: true} ,{todo: "Things", yetTodo: false}
];
const data = {todos: list}


app.get("/", function (req, res) {
  res.render('todolist', data);
});

app.post('/complete',function (req, res){
  console.log(req.body)
  res.redirect('/');
})

app.post("/", function (req, res) {
  list.push({todo:req.body.todo, yetTodo: true});
  res.redirect('/');
})

app.listen(3000, function(){
  console.log('Is it over yet')
})
