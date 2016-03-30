<?php
try {
    // On se connecte à MySQL
    $bdd = new PDO('mysql:host=localhost;dbname=DABB;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    //requêtes SQL qui comportent des erreurs les afficheront avec un message beaucoup plus clair avec array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION))
} catch (Exception $e) {
    // En cas d'erreur, on affiche un message et on arrête tout
    die('Erreur : ' . $e->getMessage());
}