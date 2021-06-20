<?php
     if(isset($_SERVER["HTTP_ORIGIN"])) 
     { 
         header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
     }
     else
     {
        header("Access-Control-Allow-Origin: *");
     }

     header("Access-Control-Allow-Credentials: true");
     header("Access-Control-Max-Age: 600");    // cache for 10 minutes

     if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
     {
        if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");

        if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
            header("Access-Control-Allow-Headers: 
           {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
      }


     if(!empty($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $message = $_POST['message'];
     }

    $mailBody = 'Имя: ' . $_POST["name"] . '<br>Email: ' . $_POST["email"] . '<br>Сообщение: ' . $_POST["message"] . '<br>Телефон: ' . $_POST["tel"]; 

     $to_email = 'artemf92@yandex.ru';
     $subject = "Письмо с моего сайта";
     $headers[] = 'MIME-Version: 1.0';
     $headers[] = 'Content-type: text/html; charset=UTF-8';
     $headers[] = "From: noreply@artem-frolov.ru";

     mail($to_email, $subject, $mailBody, implode("\r\n", $headers));

    ?>