<?php session_start();
require_once('includes/connexion.php');
?>
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
    <form action="../index.php" method="post">
        <label for="login">Login <input type="text" name="login"></label> <br/>
        <label for="pass">Password <input type="password" name="password"></label> <br/>
        <input type="submit" value="Connexion">
    </form>
    </body>
    </html>
<?php
// Hachage du mot de passe
if ($_POST) {
    $pass_hache = sha1($_POST['login']);

// Vérification des identifiants
    $req = $bdd->prepare('SELECT id,login,password
    FROM users
    WHERE login = :login AND password = :password');
    $req->bindValue(':login', $_POST['login']);
    $req->bindValue(':password', $pass_hache);
    $req->execute();
    $results = $req->fetch();
    if (!$results) {
        echo "Mauvais identifiant ou mot de passe !";
    } else {
        $_SESSION['id'] = $results['id'];
        $_SESSION['login'] = $results['login'];
        var_dump($_SESSION);
    }
}
