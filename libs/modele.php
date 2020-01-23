<?php



/********* PARTIE 1 : prise en main de la base de données *********/


include_once("maLibSQL.pdo.php");

function listerUtilisateurs($classe = "both")
{
    $SQL = "SELECT * FROM users ORDER BY nb_victoires DESC";

    return parcoursRs(SQLSelect($SQL));



}

function listerCouleurs(){
    $SQL = "SELECT * FROM couleurs";
    return SQLSelect($SQL);
}


function interdireUtilisateur($idUser)
{
    // cette fonction affecte le booléen "blacklist" à vrai pour l'utilisateur concerné
    $SQL = "UPDATE users SET blacklist=1 WHERE id='$idUser'";
    // DANGER : RISQUE D'INJECTION SQL !!!
    // Que se passe-t-il si $idUser vaut
    // ==> 1'; drop table users; ' <==

    // ON DOIT BANALISER LES CARACTERES SPECIAUX SQL !!

    SQLUpdate($SQL);
}

function autoriserUtilisateur($idUser)
{
    // cette fonction affecte le booléen "blacklist" à faux pour l'utilisateur concerné
    $SQL = "UPDATE users SET blacklist=0 WHERE id='$idUser'";
    SQLUpdate($SQL);
}

function verifUserBdd($login,$passe)
{
    // Vérifie l'identité d'un utilisateur
    // dont les identifiants sont passes en paramètre
    // renvoie faux si user inconnu
    // renvoie l'id de l'utilisateur si succès

    $SQL="SELECT id FROM users WHERE pseudo='$login' AND passe='$passe'";

    return SQLGetChamp($SQL);
    // si on avait besoin de plus d'un champ
    // on aurait du utiliser SQLSelect
}


function isAdmin($idUser)
{
    // vérifie si l'utilisateur est un administrateur
    $SQL ="SELECT admin FROM users WHERE id='$idUser'";
    return SQLGetChamp($SQL);
}

/********* PARTIE 2 *********/

function mkUser($pseudo, $passe,$admin=false)
{
    // Cette fonction crée un nouvel utilisateur et renvoie l'identifiant de l'utilisateur créé
    $SQL = "INSERT INTO users (pseudo, passe, admin) VALUES ('$pseudo','$passe',$admin)";
    return SQLInsert($SQL);

}

function connecterUtilisateur($idUser)
{
    // cette fonction affecte le booléen "connecte" à vrai pour l'utilisateur concerné
    $SQL = "UPDATE `users` SET `connecte` = '1' WHERE `users`.`id` = '$idUser'";
    return SQLUpdate($SQL);
}

function deconnecterUtilisateur($idUser)
{
    // cette fonction affecte le booléen "connecte" à faux pour l'utilisateur concerné
    $SQL = "UPDATE users SET connecte = 0 WHERE users.id = '$idUser'";
    return SQLUpdate($SQL);
}

function changerPseudo($idUser,$pseudo)
{
    // cette fonction modifie le pseudo d'un utilisateur
    $SQL = "UPDATE users SET pseudo=$pseudo where id=$idUser";
    return parcoursRS(SQLSelect($SQL));
}

function promouvoirAdmin($idUser)
{
    // cette fonction fait de l'utilisateur un administrateur
    $SQL = "UPDATE users SET admin = 1 WHERE users.id ='$idUser'";
    return SQLUpdate($SQL);
}

function retrograderUser($idUser)
{
    // cette fonction fait de l'utilisateur un simple mortel
    $SQL = "UPDATE `users` SET `admin` = '0' WHERE `users`.`id` = '$idUser'";
    return SQLUpdate($SQL);
}


function incVictoires($login){

    $SQL = "UPDATE users SET nb_victoires = nb_victoires + 1 WHERE pseudo = '$login'";
    return SQLUpdate($SQL);
}


?>
