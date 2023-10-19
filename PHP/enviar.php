<?php

$mensaje= "Este mensaje fue enviado por:".$name ."\r\n";
$mensaje="Su email es:".$mail ."\r\n";
$mensaje="Teléfono de contacto" .$phone . "\r\n";
$mensaje="Mensaje:" . $_POST['mensaje'] . "\r\n";
$mensaje="Enviado el :" . date('d/m/Y'  , time());

$para = 'florcita6221@gmail.com';
$asunto='Asunto del mensaje';

if(isset ($_POST['enviar'])){
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['telefono']) && !empty($_POST ['mensaje'])){
        $nombre=$_POST['nombre'];
        $email=$_POST['email'];
        $telefono=$_POST['telefono'];
        $mensaje=$_POST['mensaje'];
        
        $header='From: '.$mail . "\r\n";
        $header.="Reply_To: noreply@example.com ". "\r\n";
        $header.="X-Mailer: PHP/". phpversion();
       mail($para,$asunto,utf8_decode($mensaje),$header);
        if($mail){|
            echo"<h4>¡Email enviado exitosamente!</h4>"; 
        }  

        



    }
}

     

header ("Location:index.html");
?>

