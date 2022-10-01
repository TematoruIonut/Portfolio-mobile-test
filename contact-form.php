<?php  
if( isset($_POST['submit']) ) {
//getting user data
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$Email = $_POST['email'];
$message = $_POST['subject'];
 
//Recipient email, Replace with your email Address
$mailTo = 'tematoruionut26@gmail.com';
 
//email subject
$subject = 'You have received a new message from ' .$firstName;
 
//email message body
$htmlContent = '<h2> Email Request Received </h2>
<p> <b>Client Name: </b> '.$firstName . " " . $lastName . '</p>
<p> <b>Email: </b> '.$Email .'</p>
<p> <b>Subject: </b> '.$message .'</p>';
    
//header for sender info
$headers = "From: " .$firstName . "<". $Email . ">";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
 
//PHP mailer function
 $result = mail($mailTo, $subject, $htmlContent, $headers);
 
   //error checking
   if($result) {
    $success = "The message was sent successfully!";
   } else {
    $failed = "Error: Message was not sent, Try again Later";
   }
}
 
?>