<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
 $name = htmlspecialchars($_POST["name"]);
 $email = htmlspecialchars($_POST["email"]);
 $message = htmlspecialchars($_POST["message"]);

 if ($name && $email && $message) {
  $mail = new PHPMailer(true);

  try {
   // Server settings
   $mail->isSMTP();
   $mail->Host = 'smtp.gmail.com';
   $mail->SMTPAuth = true;
   $mail->Username = 'suboimaurice64@gmail.com'; // Your Gmail
   $mail->Password = 'suboi2019'; // Your Gmail password or app password
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
   $mail->Port = 587;

   // Recipients
   $mail->setFrom($email, $name);
   $mail->addAddress('suboimaurice64@gmail.com');

   // Content
   $mail->isHTML(true);
   $mail->Subject = 'New Contact Form Submission';
   $mail->Body = nl2br("Name: $name\nEmail: $email\n\nMessage:\n$message");

   $mail->send();
   echo "Thank you, $name! Your message has been sent.";
  } catch (Exception $e) {
   echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
 } else {
  echo "All fields are required.";
 }
} else {
 echo "Invalid request.";
}