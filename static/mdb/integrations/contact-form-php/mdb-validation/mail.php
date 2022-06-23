<?php
  $name    = (isset($_POST['name'])) ? $_POST['name'] : '';
  $email   = (isset($_POST['email'])) ? $_POST['email'] : '';
  $message = (isset($_POST['message'])) ? $_POST['message'] : '';
  $subject = (isset($_POST['subject'])) ? $_POST['subject'] : '';

  $content    = "From: $name \n Email: $email \n Message: $message";
  $recipient  = "youremail@here.com";

  $mailheader = array(
    'From' => $email,
    'Content-Type' => 'text/html;charset=UTF-8',
  );
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email sent!";
?>