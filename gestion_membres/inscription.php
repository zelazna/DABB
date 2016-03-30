<?php
require_once('includes/connexion.php');
require_once('includes/insertbdd.php');
?>
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Inscription</title>
    </head>
    <body>
    <form action="../index.php" method="post">
        <label for="login">Login <input type="text" name="login"></label> <br/>
        <label for="pass">Password <input type="password" name="password"></label> <br/>
        <input type="submit" value="Inscription">
    </form>
    </body>
    </html>
<?php
if ($_POST) {
    //insertion des infos dans la bdd
    insertbdd($bdd);
}

