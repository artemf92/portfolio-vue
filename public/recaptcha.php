<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   session_start();
   $_POST = json_decode(file_get_contents('php://input'), true);
   $_SESSION['recaptcha_token'] = $_POST['token'];
} else {
   http_response_code(404);
   header('Location: /404.html');
   exit;
}
?>