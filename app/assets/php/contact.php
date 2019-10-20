<?php
if(isset($_POST['email'])) {
 
 
  $email_from = "caroline@carolinevanaerschot.be";
  $email_to = "pumpkineat2019@outlook.com";
  $email_subject = "Tu as un nouveau message!";
 
  
 
    if(!isset($_POST['nom']) || !isset($_POST['phone']) || !isset($_POST['email']) || !isset($_POST['message'])) {
        died("Nous sommes desolées, mais le message n'a pas été envoyée");       
    }
     
 
    $nom = $_POST['nom']; 
    $phone = $_POST['phone']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 
   
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 

    $email_message .= "Nom: ".clean_string($nom)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Telephone: ".clean_string($phone)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 

$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 

 
Merci pour le message ! Nous vous contacterons bientôt !
 
<?php
 
}
?>