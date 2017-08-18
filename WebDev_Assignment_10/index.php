<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Php Variable</title>
  <style>
    .container {
      width: 60%;
      margin: 20px auto;
      background: skyblue;
      color: #333;
      padding: 20px;
    }

  </style>
</head>

<body>
  <div class="container">
    <?php
    
      // variables
      $heading = "This is Assignment no";
      $assignmentNo = 10;
      $classNo = 12;
      $name = "<h3>Md. Mahafuzur Rahaman</h3>";
      $batch = "<strong>WebDev-172-2</strong>";
      $brack = "<br>";
  
      // Output content 

      echo "<h1>" . $heading . ' ' .$assignmentNo . "</h1>";
      echo "<h2>Class No " . $classNo . "</h2>";
      echo $name;
      echo $batch;
    
      echo "<hr>";
    
      // data type determine 
    
      var_dump($heading);
      var_dump($assignmentNo);
      var_dump($classNo);
      var_dump($name);
      var_dump($batch);
      var_dump($brack);
  
    ?>
  </div>
</body>

</html>
