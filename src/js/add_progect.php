<?php

  $name = $_POST['name'];

  $data = array();

  $data['mes'] = 'OK';

  if ($name === '') {
    $data['status'] = 'erroe';
  }
  else {
    $data['status'] = 'ok';
  }

  header('Content-Type: application/json');
  echo json_encode($data);
  exit;

 ?>
