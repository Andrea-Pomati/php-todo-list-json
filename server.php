<?php 

if(isset($_POST['newTodo'])) {



  $newTodo = array();
  $newTodo['text'] = $_POST['newTodo'];
  $newTodo['done'] = false;

  $todosJSON = file_get_contents('todos.json');
  
 
  $todos = json_decode($todosJSON);
  

  $todos[] = $newTodo;


  $newTodoJSON = json_encode($todos);

 
  file_put_contents('todos.json', $newTodoJSON);

  var_dump($todos);
  
} else if(isset($_POST['toggleTodoIndex'])) {

  
  
 
  $todosJSON = file_get_contents('todos.json');

  
  $todos = json_decode($todosJSON);

  
  $todos[$_POST['toggleTodoIndex']]->done = !$todos[$_POST['toggleTodoIndex']]->done;

 
  $todosJSON = json_encode($todos);

  
  file_put_contents('todos.json', $todosJSON);



} else if(isset($_POST['deleteTodoIndex'])) {



 
  $todosJSON = file_get_contents('todos.json');
  
  
  $todos = json_decode($todosJSON);


  array_splice($todos, $_POST['deleteTodoIndex'], 1);


  $todosJSON = json_encode($todos);

  file_put_contents('todos.json', $todosJSON);


} else {

  $stringaDelFile = file_get_contents('todos.json');

  $todos = json_decode($stringaDelFile);
  

  header('Content-type: application/json');

  echo json_encode($todos);

}
