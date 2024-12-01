<?php

// file upload directory
$UPLOAD_DIR = "uploads/";

// Check if the upload directory exists, if not, create it
if (!is_dir($UPLOAD_DIR)) {
    if (!mkdir($UPLOAD_DIR, 0777, true)) {
        die("<script>alert('Failed to create upload directory');</script>");
    }
}

// file upload by POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploaded_user_file = $_FILES['file'];

    // Check if file upload error occurred
    if ($uploaded_user_file['error'] !== UPLOAD_ERR_OK) {
        echo "<script>window.alert('파일 업로드 에러');</script>";
        return;
    }

    // Get uploaded file info
    $file_tmp = $uploaded_user_file['tmp_name'];
    $file_name = $uploaded_user_file['name'];

    // Check file extension
    $file_extension = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    if ($file_extension !== 'png') {
        echo "<script>window.alert('only PNG file is allowed.');</script>";
        return;
    }

    // Change file name to uniqid
    $uniq_file_name = uniqid() . '.' . $file_extension;
    $target_file = $UPLOAD_DIR . $uniq_file_name;

    // Move file to upload directory
    $is_uploaded = move_uploaded_file($file_tmp, $target_file);
    if (!$is_uploaded) {
        echo "<script>window.alert('파일 업로드 실패');</script>";
        return;
    }

    echo "<script>window.alert('파일 업로드 성공');</script>";
}
?>

<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="./static/css/index.css">
</head>

<body>
    <div class="container">
        <?php include './static/html/header.html'; ?>
        <div class="content">
            <h1 class="title">Image Uploader</h1>
            <h3 class="title-sub">Upload the Image file and it will show you the result.</h3>

            <img class="thumb" src="./static/image/alice_tarrot.png">

            <form class="upload-form" action="./index.php" method="post" enctype="multipart/form-data">
                <input class="field" type="file" name="file">
                <button class="field btn" type="submit">upload</button>
            </form>
        </div>
    </div>
</body>

</html>