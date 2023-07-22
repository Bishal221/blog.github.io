<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require('PHPmailer/PHPMailer.php');
require('PHPmailer/SMTP.php');
require('PHPmailer/Exception.php');

$host = 'mail.bishal.co.in';
$username = 'digital@bishal.co.in';
$password = 'Invalid1@';

if (isset($_POST['send-mail'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $selectedOption = $_POST['mySelect'];
    $message = $_POST['message'];

    // Check if any of the fields are empty or blank
    if (empty($name) || trim($name) === '' || empty($email) || trim($email) === '' || empty($message) || trim($message) === '' || empty($selectedOption) || trim($selectedOption) === '') {
        echo '<script>alert("Something went wrong. Please fill in all the fields.");</script>';
        header("Location: index.html");
        exit();
    }

    $mail = new PHPMailer(true);

    try {
        // Configure SMTP settings
        $mail->isSMTP();
        $mail->Host       = $host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $username;
        $mail->Password   = $password;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Set recipients, email format, and content
        $mail->setFrom($email, $name);
        $mail->addAddress($username, 'Haltone');
        $mail->isHTML(true);
        $mail->Subject = "New Contact Email from Website";
        $mail->Body    = "Name: $name <br>
          Email: $email <br>
          Selected Option: $selectedOption <br>
          Message: $message";

        // Send the email
        $mail->send();
        header("Location: index.html");
        exit();
    } catch (Exception $e) {
        echo '<script>alert("Something went wrong. Please try again later.");</script>';
        header("Location: index.html");
        exit();
    }
}


?>