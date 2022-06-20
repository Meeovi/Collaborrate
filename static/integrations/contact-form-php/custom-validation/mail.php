<?php
  $name    = (isset($_POST['name'])) ? $_POST['name'] : '';
  $email   = (isset($_POST['email'])) ? $_POST['email'] : '';
  $message = (isset($_POST['message'])) ? $_POST['message'] : '';
  $subject = (isset($_POST['subject'])) ? $_POST['subject'] : '';

  if ($name === '') {
    die("Name cannot be empty.");
  }
  if ($email === '') {
    die("Email cannot be empty.");
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Email format invalid.");
  }
  if ($subject === '') {
    die("Subject cannot be empty.");
  }
  if ($message === '') {
    die("Message cannot be empty.");
  }

  $content    = "From: $name \n Email: $email \n Message: $message";
  $recipient  = "youremail@here.com";

  $mailheader = array(
    'From' => $email,
    'Content-Type' => 'text/html;charset=UTF-8',
  );
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email sent!";
?>