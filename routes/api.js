var express = require('express');
var router = express.Router();
var list ={
    todos:[]
} 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(list);
});

router.get('/:index', function(req, res, next) {
    res.send(list.todos[req.params.index]);
  });

router.post('/', function(req, res, next) {
    list.todos.push(req.body);
    res.send(list);
});

router.put('/:index', function(req, res, next) {
    list.todos[req.params.index] = (req.body);
    res.send(list);
});

router.delete('/:index', function(req, res, next) {
    list.todos.splice(req.params.index,1);
    res.send(list);
});

module.exports = router;
