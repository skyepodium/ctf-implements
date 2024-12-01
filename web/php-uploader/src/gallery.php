<?php
// file upload directory
$upload_directory = "uploads/";

// get uploaded files
$uploaded_files = glob($upload_directory . "*");

// sort files by modification time (newest first)
usort($uploaded_files, function ($a, $b) {
    return filemtime($b) - filemtime($a); // Descending order (newest first)
});
?>


<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="./static/css/index.css">
    <script src="./static/js/magic-grid@3.4.7/magic-grid.min.js"></script>  
</head>

<body>
    <div class="container">
        <?php include './static/html/header.html'; ?>
        <div class="content">
            <h1 class="title">Gallery</h1>
            <h3 class="title-sub">Here are the images uploaded by users.</h3>

            <div class="gallery-container">
                <?php foreach ($uploaded_files as $file) : ?>
                    <a class="gallery-item-link" href="<?php echo $file; ?>">
                        <img class="gallery-item" src="<?php echo $file; ?>">
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <script>
    const magicGrid = new MagicGrid({
        container: '.gallery-container',
        animate: true,
        gutter: 30,
        static: true,
        useMin: true
    });

    magicGrid.listen();
    </script>
</body>

</html>
