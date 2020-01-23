<?php
echo "Joueurs déja enregistrés :";
include_once "libs/maLibUtils.php";
include_once "libs/maLibSQL.pdo.php";
include_once "libs/maLibForms.php";
include_once "libs/modele.php";
$users = listerUtilisateurs();
mkTable($users,Array('classement','pseudo','nb_victoires'));
//echo $_GET['resultat'];
?>
