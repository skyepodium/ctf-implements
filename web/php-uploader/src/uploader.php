<?php

// file upload directory
$UPLOAD_DIR = "uploads/";

// Check if the upload directory exists, if not, create it
if (!is_dir($UPLOAD_DIR)) {
    if (!mkdir($UPLOAD_DIR, 0777, true)) {
        die("<script>
            alert('Failed to create upload directory');
            window.location.href = './index.php';
        </script>");
    }
}

// file upload by POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploaded_user_file = $_FILES['file'];

    // Check if file upload error occurred
    if ($uploaded_user_file['error'] !== UPLOAD_ERR_OK) {
        echo "<script>
            alert('파일 업로드 중 오류가 발생했습니다.');
            window.location.href = './index.php';
        </script>";
        exit;
    }

    // Get uploaded file info
    $file_tmp = $uploaded_user_file['tmp_name'];
    $file_name = $uploaded_user_file['name'];

    // Check file extension
    $file_extension = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    if ($file_extension !== 'png') {
        echo "<script>
            alert('Only PNG files are allowed.');
            window.location.href = './index.php';
        </script>";
        exit;
    }

    // Change file name to uniqid
    $uniq_file_name = uniqid() . '.' . $file_extension;
    $target_file = $UPLOAD_DIR . $uniq_file_name;

    // Move file to upload directory
    $is_uploaded = move_uploaded_file($file_tmp, $target_file);
    if (!$is_uploaded) {
        echo "<script>
            alert('파일 업로드 실패. 디렉토리 쓰기 권한을 확인하세요.');
            window.location.href = './index.php';
        </script>";
        exit;
    }

    // Success message and redirect
    echo "<script>
        alert('파일 업로드 성공: " . htmlspecialchars($uniq_file_name) . "');
        window.location.href = './index.php';
    </script>";
    exit;
}
?>