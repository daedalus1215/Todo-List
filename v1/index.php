<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Todo List</title>
   <!-- Bootstrap files --> 
   <!-- Latest compiled and minified CSS -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  <!-- Roboto -->
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css'>
  <!-- Awesome Fonts -->
  <link rel="stylesheet" type="text/css" href="assets/css/font-awesome-4.5.0/css/font-awesome.css">
  <!-- Our CSS -->
  <link rel="stylesheet" href="assets/css/todos.css">
  <!-- JQuery file -->
  <script type="text/javascript" src="assets/js/lib/jquery.js"></script>
  
</head>
<body>
  
  <div id="container">
    <div class="row">
    <div class="col-xs-12 col-centered">
    <div class="wrapper">
      <h1>To-Do List <i id="btn-plus" class="fa fa-plus"></i></h1>
      <input id="new-note" type="text" placeholder="Add New Todo">
      <ul id="list">
        <li><span class="btn-trash"><i class="fa fa-trash"></i></span> Go To Potions Class</li>
        <li><span class="btn-trash"><i class="fa fa-trash"></i></span> Buy New Robes</li>
        <li><span class="btn-trash"><i class="fa fa-trash"></i></span> Visit Hagrid</li>
      </ul>
    </div>
      </div>  
  </div>
    </div>
  <!-- Our JS -->
  <script type="text/javascript" src="assets/js/todos.js"></script>
</body>
</html>