const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}));


const list = [
  {todo: "whatever", yetTodo: true} ,{todo: "Things", yetTodo: false}
];
const data = {todos: list}


app.get("/", function (req, res) {
  res.render('todolist', data);
});

app.post('/complete',function (req, res){
  console.log(req.body);
  finishedList.push('');
  res.redirect('/');
})

app.post("/", function (req, res) {
  list.push({todo:req.body.addTodo, yetTodo: true});
  res.redirect('/');
})

app.listen(3000, function(){
  console.log('Is it over yet');
})
