<?php

// Do not edit this if you are not familiar with php
error_reporting (E_ALL ^ E_NOTICE);
$post = (!empty($_POST)) ? true : false;
if($post) {
	function ValidateEmail($email){

		$regex = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
		$eregi = preg_replace($regex,'', trim($email));
		
		return empty($eregi) ? true : false;
	}

	$name = stripslashes($_POST['ContactName']);
	$to = trim($_POST['to']);
	$email = strtolower(trim($_POST['ContactEmail']));
	$subject = stripslashes($_POST['subject']);
	$message = stripslashes($_POST['ContactComment']);
	$error = '';
	$Reply=$to;
	$from=$to;
	
	// Check Name Field
	if(!$name) {
		$error .= 'Introduce tu nombre.<br />';
	}
	
	// Checks Email Field
	if(!$email) { 
		$error .= 'Introduce tu email.<br />';
	}
	if($email && !ValidateEmail($email)) {
		$error .= 'Introduce un email válido.<br />';
	}

	// Checks Subject Field
	if(!$subject) {
		$error .= 'Introduce tu asunto.<br />';
	}
	
	// Checks Message (length)
	if(!$message || strlen($message) < 3) {
		$error .= "Introduce tu mensaje.<br />";
	}
	
	// Let's send the email.
	if(!$error) {
		$messages="De: $email <br>";
		$messages.="Nombre: $name <br>";
		$messages.="Email: $email <br>";	
		$messages.="Mensaje: $message <br><br>";
		$emailto=$to;
		
		$mail = mail($emailto,$subject,$messages,"from: $from <$Reply>\nReply-To: $Reply \nContent-type: text/html");	
	
		if($mail) {
			echo 'success';
		}
	} else {
		echo '<div class="error">'.$error.'</div>';
	}

}
?>