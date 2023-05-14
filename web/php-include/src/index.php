<?php

    // file upload directory
    $upload_directory = "uploads/";

    // file upload by post method
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $uploaded_user_file = $_FILES['file'];
        
        if(!$uploaded_user_file) {
            return;
        }
        
        // get uploaded file info
        $file_tmp = $uploaded_user_file['tmp_name'];
        $file_name = $uploaded_user_file['name'];

        $uniq_file_name = uniqid();
        $target_file = $upload_directory . $uniq_file_name;
        
        // move file to upload directory
        if (move_uploaded_file($file_tmp, $target_file)) {
            $queryString = http_build_query(['file' => $uniq_file_name]);
            $redirectURL = '?' . $queryString;
            header('Location: ' . $redirectURL);
        }
    } 
    
    // read file by get method
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if(isset($_GET['file'])) {
            $uploaded_file = $_GET['file'];
            $uploaded_file_path = $upload_directory . $uploaded_file;
        }
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./static/css/index.css">
    </head>
    <body>
        <div class="upload-container">
            <h1 class="title">HTML Uploader</h1>
            <h3 class="title-sub">Upload the html file and it will show you the result.</h3>

            <?php 
                if (!empty($uploaded_file_path)) {
                    include($uploaded_file_path);
                }
            ?>
            <img class="thumb" src="./static/image/alice.png">

            <form class="upload-form" action="./index.php" method="post" enctype="multipart/form-data">
                <input class="field" type="file" name="file">
                <button class="field btn" type="submit">upload</button>
            </form>
        </div>
    </body>
</html>


