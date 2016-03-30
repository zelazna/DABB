<?php
function insertbdd(PDO $bdd)
{
    $sql = "INSERT INTO `users`
        (login, password)
        VALUES
        (:login, :password )
        ";
    $stmt = $bdd->prepare($sql);
    $stmt->bindValue(':login', htmlspecialchars($_POST['login']));
    $stmt->bindValue(':password', sha1($_POST['password']));
    $stmt->execute();
}