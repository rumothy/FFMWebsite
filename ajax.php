<?php 
    // if (isset($_POST['action'])) {
    //     $to = "rumothy.dev@gmail.com";
    //     $subject = "My subject";
    //     $txt = "hello world 5";
    //     $headers = "From: info@fairfocusmedia.com" . "\r\n" . 
    //     "CC: fairfocusmedia@gmail.com";
        
    //     mail($to, $subject, $txt, $headers);
    // }
    // if (isset($_POST['action'])) {
    //     $to = "fairfocusmedia@gmail.com, rumothy.dev@gmail.com";
    //     $subject = "My subject";
    //     $txt = "hello world 6";
    //     $headers = "From: info@fairfocusmedia.com" . "\r\n" . 
    //     "CC: info@fairfocusmedia.com";
        
    //     mail($to, $subject, $txt, $headers);
    // }


    // let data = { 
    //     name: contact.name,
    //     email: contact.email,
    //     subject: contact.subject,
    //     comment: contact.comment
    //   };

    
    $headers = "From: info@fairfocusmedia.com" . "\r\n";
    $to = "fairfocusmedia@gmail.com";
    $name = "";
    $email = "";
    $subject = "";
    $comment = "";
    $message = "";
    $nameErr = $emailErr = "";

    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } 
    else {
        $name = $_POST["name"];
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }
    
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } 
    else {
        $email = $_POST["email"];
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
        

    if (empty($_POST["comment"])) {
        $comment = "";
    } 
    else {
        $comment = $_POST["comment"];
    }


    $hasMesage = isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comment']);
    if ($hasMesage) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $comment = $_POST['comment'];
        $message = $name . "\r\n" . $email . "\r\n" . $comment;
    }
    if (isset($_POST['subject'])) $subject = $_POST['subject'];
    
    mail($to, $subject, $message, $headers);
?>