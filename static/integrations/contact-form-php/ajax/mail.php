<?php
  $name    = (isset($_POST['name'])) ? $_POST['name'] : '';
  $email   = (isset($_POST['email'])) ? $_POST['email'] : '';
  $message = (isset($_POST['message'])) ? $_POST['message'] : '';
  $subject = (isset($_POST['subject'])) ? $_POST['subject'] : '';

  header('Content-Type: application/json');
  if ($name === '') {
    $response =  json_encode(array(
      'message' => 'Name cannot be empty',
      'code' => 0
    ));
    die($response);
  }
  if ($email === '') {
    $response =  json_encode(array(
      'message' => 'Email cannot be empty',
      'code' => 0
    ));
    die($response);
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response =  json_encode(array(
      'message' => 'Email format invalid.',
      'code' => 0
    ));
    die($response);
  }
  if ($subject === '') {
    $response =  json_encode(array(
      'message' => 'Subject cannot be empty',
      'code' => 0
    ));
    die($response);
  }
  if ($message === '') {
    $response =  json_encode(array(
      'message' => 'Message cannot be empty',
      'code' => 0
    ));
    die($response);
  }

  $content    = "From: $name \n Email: $email \n Message: $message";
  $recipient  = "youremail@here.com";

  $mailheader = array(
    'From' => $email,
    'Content-Type' => 'text/html;charset=UTF-8',
  );
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  $response =  json_encode(array(
    'message' => 'Email successfully sent!',
    'code' => 1
  ));
  die($response);
?>