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

            <form class="upload-form" action="./uploader.php" method="post" enctype="multipart/form-data">
                <input class="field" type="file" name="file">
                <button class="field btn" type="submit">upload</button>
            </form>
        </div>
    </div>
</body>

</html>
