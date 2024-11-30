<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>File Upload</title>
</head>
<body>
<h1>File Upload</h1>

<form action="/file" method="post" enctype="multipart/form-data">
    <label for="file">Select a file:</label>
    <input type="file" id="file" name="file">
    <button type="submit">Upload</button>
</form>

<p>${message}</p>

<a href="/file">View uploaded files</a>
</body>
</html>